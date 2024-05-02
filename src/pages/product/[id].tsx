import { DescriptionContainer, ImageContainer, ProductContainer, TextContainer } from "@/styles/pages/product";

import Image from "next/image"
import shirt1 from '../../assets/Shirt-1.png';


export default function Product(){
    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={shirt1} width={520} height={520} alt=''/>
            </ImageContainer>
            <TextContainer>
                <DescriptionContainer>
                    <h1>Camiseta Beoyond the Limits</h1>
                    <h2>R$ 79,90</h2>
                    <p>Tempus fermentum eget lacus, quis ante. Potenti sit pharetra, 
                        ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus donec hendrerit. 
                        Rhoncus, nunc, eu at ac.

                        At massa, fermentum amet ornare cras tincidunt nunc tincidunt. 
                        Netus lorem nulla nulla mattis integer velit dictum proin nibh.</p>
                </DescriptionContainer>
                <button>Colocar na sacola</button>
            </TextContainer>
        </ProductContainer>
    )
};