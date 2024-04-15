
import { useContext } from "react";
import ProductContainer from "../../styles/styles";
import { CartContext } from "../../contexts/CartContext";
import ProductCard from "../../components/ProductCard";

import Skeleton from 'react-loading-skeleton'
import { ProductCardContainer } from "../../components/ProductCard/styles";
import { useProductsData } from "../../hooks/useProductsData";

export default function Products() {

  const { products } = useContext(CartContext);
  const { isLoading } = useProductsData();

  return (
    <>
      <ProductContainer>
        {isLoading && (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7].map(item =>
              <ProductCardContainer key={item}>
                <Skeleton height={285} style={{
                  lineHeight: "unset"
                }} />
              </ProductCardContainer>)}
          </>
        )}
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
            />
          );
        })}
      </ProductContainer>
    </>
  );
}
