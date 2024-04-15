import styled from "styled-components";
import { motion } from "framer-motion"

export const ProductCardContainer = styled.div`
  width: 218px;
  height: 285px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);

  .cart-product-description {
    font-size: 10px;
    font-weight: 300;
    margin: 8px 14px 12px;
  }

  @media only screen and (max-width: 375px) {
    width: 251px;
    height: 328px;

    .cart-product-description {
      margin: 9px 14px 12px;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 138px;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  .image-cart-product {
    width: 100%;
    object-fit: contain;
    height: 138px;
  }

  @media only screen and (max-width: 375px) {
    height: 159px;

    .image-cart-product {
    width: 100%;
    object-fit: contain;
    height: 159px;
  }
  }
`;

export const ProductTitle = styled.div`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 14px;

  .cart-product-title {
    font-size: 16px;
    font-weight: 400;
    padding-right: 6px;

  }

  .cart-product-price {
    height: 26px;
    background-color: #373737;
    color: #FFF;
    font-weight: 700;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 6px;
    border-radius: 5px;
  }

  @media only screen and (max-width: 425px) {
    height: 44px;

    .cart-product-title {
      padding-right: 4px;
    }

    .cart-product-price {
      height: 30px;
      padding: 0 10px;
    }
  }
`;

export const BuyButton = styled(motion.button)`
  width: 100%;
  height: 30px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  background-color: #0F52BA;
  color: #FFF;
  cursor: pointer;

  .buy-button-title {
    font-weight: 700;
    font-size: 18px;
  }

  @media only screen and (max-width: 375px) {
    height: 37px;
    gap: 16px;

    .buy-button-icon {
      height: 15px;
      width: 15px;
    }
    .buy-button-title {
      font-size: 14px;
    }
  }
`;

