import { ImagesContainer, SuccessContainer, SuccessTextContainer } from "@/styles/pages/success";
import Image from "next/image";
import Link from "next/link";

import shirt1 from '../assets/Shirt-1.png';
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface SuccessProps {
    customerName: string,

    products: {
      image: string,
    }[]
  }

export default function Success( { customerName, products }: SuccessProps){
    return(
        <SuccessContainer>
            <ImagesContainer>
                {products && (
                    products.map((product) => (
                        <div className="imageContainer">
                            <Image src={product.image} width={130} height={130} alt=""/>
                        </div>
                    ))
                )}                
            </ImagesContainer>
            <SuccessTextContainer>
                <h1>Compra Efetuada</h1>
                <p>Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa. </p>
                <Link href='/'>
                    <button>Voltar ao catálogo</button>
                </Link>
            </SuccessTextContainer>
        </SuccessContainer>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['customer', 'line_items.data.price.product'],
    });

    const customerName = session.customer_details?.name|| 'Cliente Desconhecido';

    const products = session.line_items?.data.map((item: any) => {
        const product = item.price.product;
        return {
            image: product.images[0], 
        };
    });

    return {
        props: {
            customerName,
            products
        }
    }
};