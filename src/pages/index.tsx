import { ArrowContainer, HomeContainer, KeenSliderContainer, ProductCard } from "@/styles/pages/home";
import Image from "next/image";
import shirt1 from '../assets/Shirt-1.png';
import { Tote } from "@phosphor-icons/react";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react";


export default function Home(){

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
          <ProductCard className="keen-slider__slide number-slide1">
            <Image src={shirt1} width={520} height={480} alt=''/>
            <footer>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <p>R$ 79,90</p> 
              </div>
              
              <button><Tote size={32}/></button>
            </footer>
          </ProductCard>
          <ProductCard className="keen-slider__slide number-slide2">
            <Image src={shirt1} width={520} height={480} alt=''/>
            <footer>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <p>R$ 79,90</p> 
              </div>
              
              <button><Tote size={32}/></button>
            </footer>
          </ProductCard>
          <ProductCard className="keen-slider__slide number-slide3">
            <Image src={shirt1} width={520} height={480} alt=''/>
            <footer>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <p>R$ 79,90</p> 
              </div>
              
              <button><Tote size={32}/></button>
            </footer>
          </ProductCard>
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