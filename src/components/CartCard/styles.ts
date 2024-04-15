import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #FFF;
  width: 385px;
  height: 101px;
  border: 0;
  border-radius: 8px;
  margin: 36px auto;
  

  .image-cart-product {
    height: 60px;
    width: 50px;
    object-fit: cover;
    
  }

  .container-cart-card-qtd {
    align-items: center;
    justify-content: space-between;
    width: 140px;
    display: flex;

  }

  @media only screen and (max-width: 768px) {
    height: 220px;
    flex-direction: column;
    margin: 32px auto;
    width: 250px;


    .cart-card-image-container {
      width: 100px;
      height: 100px;
      display: flex;
      margin-top: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-cart-product {
      width: 80px;
      height: 90px;
    }

    .container-cart-card-qtd {
      width: 221px;
      height: 35px;
    }
  }
`;

export const ButtonRemoveItem = styled.button`

  border-radius: 100%;
  width: 18px;
  height: 18px;
  cursor: pointer;
  right: -22px;
  top: -50px;
  position: relative;
  background: #000;
  color: #FFF;
  border: 0;


  @media only screen and (max-width: 768px) {
    right: -108px;
    top: -195px;
    background: transparent;
    color: #000;
    width: 25px;
    height: 25px;
    padding: 0;
    margin: 0;
  }
`;

export const NameProduct = styled.h1`
  font-size: 13px;
  font-weight: 400;
  width: 113px;
  height: 33px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 22px;
    width: 221px;
    font-size: 16px;
    justify-content: center;
  }
`;

export const QuantityProduct = styled.div`
  .control-quantity-cart-product {
    height: 19px;
    width: 50px;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart-quantity-text {
    font-size: 5px;
    font-weight: 400;
    margin-bottom: 4px;
  }

  .cart-product-quantity {
    font-size: 10px;
  }

  .cart-product-quantity-button {
    height: 19px;
    border: 0;
    background: transparent;
    color: #000;
    display: flex;
    align-items: center;
    padding: 0 3px;
  }

  .right {
    border-left: 1px solid #bfbfbf;
  }

  .left {
    border-right: 1px solid #bfbfbf;
  }

  @media only screen and (max-width: 768px) {
    width: 98px;

    .cart-quantity-text {
      display: none;
      margin: 0;
    }

    .control-quantity-cart-product {
      width: 98px;
      height: 35px;
      margin: 0;
    }

    .cart-product-quantity {
      font-size: 20px;
    }

    .cart-product-quantity-button {
      width: 32px;
      height: 18px;
      justify-content: center;
      margin-top: 4px;
    }
  }
`;
export const PriceProduct = styled.h2`
  font-size: 14px;
  font-weight: 700;
  width: 80px;
  text-align: right;

  @media only screen and (max-width: 768px) {
    height: 35px;
    background-color: #373737;
    color: #FFF;
    font-weight: 700;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`;
