import { Minus, Plus, X } from "phosphor-react";
import { ProductOnCart } from "../../types/product";
import {
  CardContainer,
  NameProduct,
  PriceProduct,
  QuantityProduct,
  ButtonRemoveItem,
} from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../utils";

export function CartCard( { product }: { product: ProductOnCart } ) {

  const { removeFromCart, updateQuantityItem } = useContext(CartContext);


  function handleRemoveProduct(productToRemove: ProductOnCart) {
    removeFromCart(productToRemove);
  }

  function handleUpdate(productToUpdate: ProductOnCart, value: number) {
    updateQuantityItem(productToUpdate, value);
  }

  return (
    <CardContainer>
      <div className="cart-card-image-container">
        <img
          className="image-cart-product"
          src={product.photo}
          alt=""
          width={50}
          height={60}
        />
      </div>

      <NameProduct>{product.name}</NameProduct>

      <div className="container-cart-card-qtd">
        <QuantityProduct>
          <p className="cart-quantity-text">Qtd.</p>
          <div className="control-quantity-cart-product">
            <button
              className="cart-product-quantity-button left"
              onClick={() =>
                handleUpdate(product, 1)
              }
            >
              <Plus size={10} />
            </button>
            <span className="cart-product-quantity">{product.quantity}</span>
            <button
              className="cart-product-quantity-button right"
              onClick={() =>
                handleUpdate(product, -1)
              }
            >
              <Minus size={10} />
            </button>
          </div>
        </QuantityProduct>

        <PriceProduct>
          R$ {formatPrice((+product.price * +product.quantity).toString().concat(".00"))}
        </PriceProduct>
      </div>

      <ButtonRemoveItem
        onClick={() => { handleRemoveProduct(product) }}
      >
        <X size={14} />
      </ButtonRemoveItem>
    </CardContainer>
  );
}
