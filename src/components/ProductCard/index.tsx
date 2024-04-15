import {
  ImageContainer,
  ProductCardContainer,
  ProductTitle,
  BuyButton,
} from "./styles";

import bag from "../../assets/bag.svg";
import { Product } from "../../types/product";
import { formatPrice } from "../../utils";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export default function ProductCard(
  { product }: { product: Product }
) {
  const { addProductOnCart } = useContext(CartContext);
  function handleAddProduct(product: Product) {
    addProductOnCart(product);
  }

  return (
    <ProductCardContainer>
      <ImageContainer>
        <img
          src={product.photo}
          alt={product.name}
          width={100}
          height={138}
          className="image-cart-product"
        />
      </ImageContainer>
      <ProductTitle>
        <h3 className="cart-product-title">
          {product.name}
        </h3>
        <span className="cart-product-price">
          R${formatPrice(product.price)}
        </span>
      </ProductTitle>
      <p className="cart-product-description">Redesigned from scratch and completely revised.</p>
      <BuyButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { handleAddProduct(product) }}>
        <img src={bag} alt="" className="buy-button-icon" />
        <span className="buy-button-title">COMPRAR</span>
      </BuyButton>
    </ProductCardContainer>
  );
}
