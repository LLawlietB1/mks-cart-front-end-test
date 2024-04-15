import { createContext, useState, ReactNode, useEffect } from 'react'
import { Product, ProductOnCart } from '../types/product';
import { useProductsData } from '../hooks/useProductsData';


interface CartContextData {
    cartTotal: number;
    products?: Product[];
    productsOnCart: ProductOnCart[],
    addProductOnCart: (product: Product) => void,
    clearCart: () => void,
    removeFromCart: (product: ProductOnCart) => void,
    updateQuantityItem: (productOnCart: ProductOnCart, value: number) => void,
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData);


export function CartProvider({ children }: CartProviderProps) {


    const { data: productsList } = useProductsData();
    const [products, setProducts] = useState<Product[]>();
    const [productsOnCart, setProductsOnCart] = useState<ProductOnCart[]>([]);
    const [cartTotal, setCartTotal] = useState<number>(0);

    const addProductOnCart = (productToAddOnCart: Product) => {
        const indexProductOnCart = productsOnCart.findIndex(product => product?.id === productToAddOnCart?.id);
        if (indexProductOnCart === -1) {
            const newProductOnCart = [...productsOnCart, {
                ...productToAddOnCart,
                quantity: 1,
            }]
            setProductsOnCart(newProductOnCart);
        } else {
            const newProductOnCart = [...productsOnCart];
            newProductOnCart[indexProductOnCart].quantity = newProductOnCart[indexProductOnCart].quantity + 1;
            setProductsOnCart(newProductOnCart);
        }
    }


    const removeFromCart = (productForRemove: ProductOnCart) => {
        const newProductOnCartList = productsOnCart.filter(product => product.id !== productForRemove.id)
        setProductsOnCart(newProductOnCartList);
    }

    const updateQuantityItem = (productOnCart: ProductOnCart, value: number) => {
        const indexProductOnCart = productsOnCart.findIndex(product => product?.id === productOnCart?.id);
        let newProductOnCart = [...productsOnCart];
        newProductOnCart[indexProductOnCart].quantity = newProductOnCart[indexProductOnCart].quantity + value;
        if (newProductOnCart[indexProductOnCart].quantity === 0) {
            newProductOnCart = productsOnCart.filter(product => product.id !== newProductOnCart[indexProductOnCart].id)
        }
        setProductsOnCart(newProductOnCart);
    }
    
    const clearCart = () => {
        setProductsOnCart([]);
    }

    useEffect(() => {
        let total = 0;
        productsOnCart.forEach(product => {
            total += (Number(product.price) * product.quantity);
        })
        setCartTotal(total);
    }, [productsOnCart])


    useEffect(() => {
        setProducts(productsList);
    }, [productsList])


    return (
        <CartContext.Provider value={{
            products,
            productsOnCart,
            addProductOnCart,
            removeFromCart,
            updateQuantityItem,
            clearCart,
            cartTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}