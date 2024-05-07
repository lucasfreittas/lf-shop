import { ArrowContainer, HomeContainer, KeenSliderContainer, ProductCard } from "@/styles/pages/home";
import Image from "next/image";
import Link from "next/link";

import { Tote } from "@phosphor-icons/react";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react";

import { GetServerSideProps, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import { useCart } from "@/context/Cart";



interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: number
  }[]
}


export default function Home({ products }: HomeProps){

  const {addProductToCart} = useCart();

  function handleAddProduct(){
    const newProduct = {
      id: 'teste',
      name: 'oi',
      imageUrl: 'eumesmo',
      price: 2,
    }
    addProductToCart(newProduct);

  };

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 48, 
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

  function Arrow(props:any) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <ArrowContainer>
        <div></div>
        <svg
          onClick={props.onClick}
          className={`arrow ${
            props.left ? "arrow--left" : "arrow--right"
          } ${disabled}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width='56px'
          height='56px'
        >
          {props.left && (
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          )}
          {!props.left && (
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          )}
        </svg>
      </ArrowContainer>
    )
  }

  return(
    <>
      <HomeContainer className='navigation-wrapper'>
        <KeenSliderContainer ref={sliderRef} className="keen-slider">
         
            {products.map(product => {
              return(
                <ProductCard key={product.id} className="keen-slider__slide number-slide1">
                  <Link href={`/product/${product.id}`} prefetch>
                    <Image src={product.imageUrl} width={520} height={480} alt=''/>
                  </Link>
                  <footer>
                    <div>
                      <span>{product.name}</span>
                      <p>{product.price}</p> 
                    </div>
                    
                    <button onClick={handleAddProduct}><Tote size={32}/></button>
                  </footer>
                </ProductCard>
              )
            })}
        </KeenSliderContainer>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </HomeContainer>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price 

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },

    
  };
};