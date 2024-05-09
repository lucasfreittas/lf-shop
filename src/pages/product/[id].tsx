import { DescriptionContainer, ImageContainer, ProductContainer, TextContainer } from "@/styles/pages/product";

import Image from "next/image"
import shirt1 from '../../assets/Shirt-1.png';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import { useCart } from "@/context/Cart";

interface ProductProps {
    product: {
      id: string,
      name: string,
      imageUrl: string,
      price: string,
      description: string,
      defaultPriceId: string
    }
  }

  interface OneProduct {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    defaultPriceId: string,
  };


  export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter();

    if(isFallback){
        return <p>Loading...</p>
    };

    const {addProductToCart} = useCart();

    function handleAddProduct(product: OneProduct){
      addProductToCart(product);
    };

    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={520} alt=''/>
            </ImageContainer>
            <TextContainer>
                <DescriptionContainer>
                    <h1>{product.name}</h1>
                    <h2>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(parseFloat(product.price))}</h2>
                    <p>{product.description}</p>
                </DescriptionContainer>
                <button onClick={() => handleAddProduct(product)}>Colocar na sacola</button>
            </TextContainer>
        </ProductContainer>
    )
};

export const getStaticPaths: GetStaticPaths = async () => {
    return{
        paths: [],
        fallback: true,
    }
};

export const getStaticProps: GetServerSideProps<any, {id: string}> = async ({ params }) => {
    const productId = params!.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return{
        props: {
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.images[0],
                price: price.unit_amount! / 100,
                defaultPriceId: price.id,
            }
        },

        revalidate: 60 * 60 * 2
    }
}; 