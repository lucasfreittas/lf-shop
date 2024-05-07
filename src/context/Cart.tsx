import { ReactNode, createContext, useContext, useState } from "react";

interface ProductType {
    id: string,
    name: string,
    imageUrl: string,
    price: number
};

interface CartContextTypes {
    addProductToCart: (productData: ProductType) => void;
    cart: ProductType[];
};

export const CartContext = createContext({} as CartContextTypes);

export function CartProvider({children}:{children: ReactNode}){
    const [ cart, setCart] = useState<ProductType[]>([]);

    function addProductToCart(productData: ProductType){
        setCart(prevCart => [...prevCart, productData]); 
        console.log(cart)
    };

    return(
        <CartContext.Provider value={{
            cart: cart,
            addProductToCart, 
        }}>
            {children}
        </CartContext.Provider>
    )
};

export function useCart(){
    const context = useContext(CartContext);
    return context
};
