import { styled } from "..";

export const HomeContainer = styled('section', {
    display: 'flex',
    height: 656,
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    position: 'relative',

});

export const ArrowContainer = styled('div', {
    height: '100%',
    width: 40,
    background: 'transparent',
    overflow: 'hidden',
    boxShadow: '-10px 0px 10px -5px rgba(0, 0, 0, 0.5)',
    zIndex: 10,

    svg:{
        fill: 'white',
        position: 'absolute',
        right: 24,
        top: '40%',
        cursor: 'pointer',
    }
})

export const KeenSliderContainer = styled('div', {
    display: 'flex',
    height: 656,
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    position: 'relative',
    background: 'blue',
});

export const ProductCard = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    cursor: 'pointer',
    height: '100%',
    minWidth: 696,
    padding: 4,
    position: 'relative',

    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'calc(100% - 0.8rem)',
        backgroundColor: 'rgba(32, 32, 36, 0.9)',
        padding: '2rem',
        position: 'absolute',
        bottom: 0,
        margin: 4,
        borderRadius: 6,
        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',
       

        div: {
            display: 'flex',
            flexDirection: 'column',

            span: {
                fontSize: '2rem',
                lineHeight: '160%',
                color: '$gray-100',
                fontWeight: 'bold',
            },

            p: {
                fontSize: '2.4rem',
                lineHeight: '140%',
                color: '$green-300',
                fontWeight: 'bold',
            },
        },

        button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$green-500',
            padding: '1.2rem',
            borderRadius: 6,
            color: 'white',
        },  
    },

    '&:hover': {
        footer: {
          transform: 'translateY(0%)',
          opacity: 1
        }}
});