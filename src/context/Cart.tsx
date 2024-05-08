import { ReactNode, createContext, useContext, useState } from "react";

interface ProductType {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    defaultPriceId: string,
};

interface CartContextTypes {
    addProductToCart: (productData: ProductType) => void;
    removeProductToCart: (productId: string) => void;
    calcTotalAmount: () => void;
    cart: ProductType[];
    totalAmount: number;
};

export const CartContext = createContext({} as CartContextTypes);

export function CartProvider({children}:{children: ReactNode}){
    const [ cart, setCart] = useState<ProductType[]>([]);
    const [ totalAmount, setTotalAmount ] = useState(0);

    function addProductToCart(productData: ProductType){
        setCart(prevCart => [...prevCart, productData]); 
        console.log(cart)
    };

    function removeProductToCart(productId: string){
        const index = cart.findIndex(product => product.id === productId);

        if (index !== -1) {
            setCart(prevCart => prevCart.slice(0, index).concat(prevCart.slice(index + 1)));
        }
    };

    function calcTotalAmount(){
        const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0);
        setTotalAmount(totalPrice)
    };

    return(
        <CartContext.Provider value={{
            cart: cart,
            totalAmount,
            addProductToCart,
            removeProductToCart,
            calcTotalAmount,
        }}>
            {children}
        </CartContext.Provider>
    )
};

export function useCart(){
    const context = useContext(CartContext);
    return context
};
