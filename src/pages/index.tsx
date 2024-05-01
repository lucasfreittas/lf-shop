import { HomeContainer, ProductCard } from "@/styles/pages/home";
import Image from "next/image";
import shirt1 from '../assets/Shirt-1.png';
import shirt2 from '../assets/Shirt-2.png';
import shirt3 from '../assets/Shirt-3.png';
import shirt4 from '../assets/Shirt-4.png';
import { Tote } from "@phosphor-icons/react";


export default function Home(){
  return(
    <HomeContainer>
      <ProductCard>
        <Image src={shirt1} width={520} height={480} alt=''/>
        <footer>
          <div>
            <span>Camiseta Beyond the Limits</span>
            <p>R$ 79,90</p> 
          </div>
          
          <button><Tote size={24}/></button>
        </footer>
      </ProductCard>
      <ProductCard>
        <Image src={shirt1} width={520} height={480} alt=''/>
      </ProductCard>
    </HomeContainer>
  )
};