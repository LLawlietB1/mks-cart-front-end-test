import { X } from "phosphor-react";
import { CartCard } from "../CartCard";
import {
  CheckoutButton,
  CloseButton,
  Content,
  Overlay,
  Title,
  TotalContainer,
} from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../utils";
import { AnimatePresence } from "framer-motion";

export function CartModal({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) {

  const { productsOnCart, cartTotal, clearCart } = useContext(CartContext);

  function handleFinishShop() {
    if (productsOnCart.length !== 0) {
      clearCart();
      alert('Compra finalizada com sucesso! ');
    } else {
      alert('Seu carrinho está vazio.')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay />
          <Content
            initial={{ x: "100%" }}
            animate={{
              x: 0
            }}
            exit={{
              x: "100%"
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <Title>Carrinho de compras</Title>

            <CloseButton onClick={() => closeModal()}>
              <X size={20} />
            </CloseButton>

            {productsOnCart?.length === 0 ? (
              <h3 className="empty-text">Seu carrinho está vazio.</h3>
            ) : (
              productsOnCart?.map((elem) => <CartCard key={elem.id} product={elem} />)
            )}

            <TotalContainer>
              <p className="total-text">Total:</p>
              <p className="price-text">R${formatPrice(cartTotal?.toString().concat(".00"))}</p>
            </TotalContainer>

            <CheckoutButton
              onClick={() => handleFinishShop()}
            >Finalizar Compra</CheckoutButton>
          </Content>
        </>
      )}
    </AnimatePresence>
  );
}
