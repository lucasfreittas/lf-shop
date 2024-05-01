import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";

import Image from "next/image";
import lfLogo from '../assets/lf-logo.svg'

import { Tote } from '@phosphor-icons/react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header>
          <Image src={lfLogo} width={96} height={52} alt=''/>
          <button><Tote size={24}/></button>
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
)}
