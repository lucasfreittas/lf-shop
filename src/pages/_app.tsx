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
import { GetServerSideProps } from "next";

globalStyles()

export default function App({ Component, pageProps, router }: AppProps & { router: any }) {
  return (
    <CartProvider>
      <AppContent Component={Component} pageProps={pageProps} router={router} />
    </CartProvider>
  );
}

function AppContent({ Component, pageProps }: AppProps) {
  const { cart } = useCart();

  useEffect(() => {
    console.log('Sou o useEffect')
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
              <button><span>1</span><Tote size={24}/></button>
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
                          <Image src={shirt1} width={94} height={94} alt=""/>
                        </div>
                        <div className="textContainer">
                          <h1>{product.name}</h1>
                          <h2>R$ 79,90</h2>
                          <button>Remover</button>
                        </div>      
                      </SideSheetProductContainer>
                    ))
                  )}                   
                </SideSheetContent>
                <SideSheetTotal>
                  <div className="amountContainer">
                    <p>Quantidade</p> <span>3 itens</span>
                  </div>
                  <div className="priceContainer">
                    <p>Valor Total</p> <span>R$ 270,00</span>
                  </div>
                  <button>Finalizar Compra</button>
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