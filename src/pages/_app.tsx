import { globalStyles } from "@/styles/global";
import { CartSideSheet, Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";

import Image from "next/image";
import lfLogo from '../assets/lf-logo.svg';
import shirt1 from '../assets/Shirt-1.png';

import { Tote } from '@phosphor-icons/react'

import * as Dialog from '@radix-ui/react-dialog';


globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header>
          <Image src={lfLogo} width={96} height={52} alt=''/>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button><Tote size={24}/></button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <CartSideSheet>

                <Dialog.Close>
                  <span>x</span>
                </Dialog.Close>

                <Dialog.Title>Teste</Dialog.Title>

                <div>
                  <div>
                    <Image src={shirt1} width={94} height={94} alt=""/>
                  </div>
                  <div>
                    <h1>Camiseta Beyond the Limits</h1>
                    <h2>R$ 79,90</h2>
                    <button>Remover</button>
                  </div>
                </div>

                <div>
                  <div>
                    <p>Quantidade</p> <span>3 itens</span>
                  </div>
                  <div>
                    <p>Valor Total</p> <span>R$ 270,00</span>
                  </div>
                  <button>Finalizar Compra</button>
                </div>
              </CartSideSheet>
            </Dialog.Portal>
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
)}
