import { globalStyles } from "@/styles/global";
import { CartSideSheet, Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";

import Image from "next/image";
import lfLogo from '../assets/lf-logo.svg'

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
                <Dialog.Title>Teste</Dialog.Title>
                <Dialog.Close>
                  <span>x</span>
                </Dialog.Close>
              </CartSideSheet>
            </Dialog.Portal>
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
)}
