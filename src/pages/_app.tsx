import { globalStyles } from "@/styles/global";
import { CartSideSheet, CloseButton, Container, Header, SideSheetContent, SideSheetProductContainer, SideSheetTotal } from "@/styles/pages/app";
import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
import lfLogo from '../assets/lf-logo.svg';
import shirt1 from '../assets/Shirt-1.png';
import { Tote, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog';
import { CartProvider, useCart } from "@/context/Cart";
import { useEffect } from "react";
import axios from "axios";

globalStyles()

export default function App({ Component, pageProps, router }: AppProps & { router: any }) {
  return (
    <CartProvider>
      <AppContent Component={Component} pageProps={pageProps} router={router} />
    </CartProvider>
  );
}

function AppContent({ Component, pageProps }: AppProps) {
  const { cart, removeProductToCart, calcTotalAmount, totalAmount } = useCart();

  function handleRemoveProductToCart(productId: string){
    removeProductToCart(productId)
  };

  async function handleCheckoutSession(){
    const allPricesIds = cart.map(item => item.defaultPriceId)  

    try{
      const response = await axios.post('/api/checkout', { allPricesIds })
      
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl

    } catch(err){

      alert('Falha ao redirecionar ao checkout!')

    }
  };


  useEffect(() => {

    calcTotalAmount()

  }, [cart]);

  return (
    <> 
      <Container>
        <Header>
          <Link href='/'>
            <Image src={lfLogo} width={96} height={52} alt=''/>
          </Link>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                {cart && (cart.length > 0 ? <span>{cart.length}</span> : null)}
                <Tote size={24}/>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <CartSideSheet>
                <CloseButton>
                  <X size={24} />
                </CloseButton>
                <SideSheetContent>
                  <Dialog.Title className="radixTitle">Sacola de Compras</Dialog.Title>
                  {cart && (
                    cart.map((product) => (
                      <SideSheetProductContainer key={product.id}>
                        <div className="imageContainer">
                          <Image src={product.imageUrl} width={94} height={94} alt=""/>
                        </div>
                        <div className="textContainer">
                          <h1>{product.name}</h1>
                          <h2>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(parseFloat(product.price))}</h2>
                          <button onClick={() => handleRemoveProductToCart(product.id)}>Remover</button>
                        </div>      
                      </SideSheetProductContainer>
                    ))
                  )}                   
                </SideSheetContent>
                <SideSheetTotal>
                  <div className="amountContainer">
                    <p>Quantidade</p> <span>{`${cart.length} Itens`}</span>
                  </div>
                  <div className="priceContainer">
                    <p>Valor Total</p> <span>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(totalAmount))}</span>
                  </div>
                  <button onClick={handleCheckoutSession}>Finalizar Compra</button>
                </SideSheetTotal>
              </CartSideSheet>
            </Dialog.Portal>
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
  );
}