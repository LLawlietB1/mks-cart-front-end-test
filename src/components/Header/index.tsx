import { HeaderContainer, HeaderContent, CartButton } from "./styles";
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/cart.svg';
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartModal } from "../CartModal";

export function Header() {

  const [openModal, setOpenModal] = useState(false);
  const { productsOnCart } = useContext(CartContext);

  return (
    <HeaderContainer data-test-id="market-header">
      <HeaderContent>
        <img className="logo" src={logo} alt='MKS Sistemas logo' />

        <CartButton onClick={() => setOpenModal(!openModal)}>
          <img className="cart-icon" src={cartIcon} alt="Cart icon" />
          <span className="cart-product-number">{productsOnCart?.length}</span>
        </CartButton >
        <CartModal isOpen={openModal} closeModal={()=> { setOpenModal(!openModal)}}/>

      </HeaderContent>
    </HeaderContainer>
  );
}
