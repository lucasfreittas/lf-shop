import { styled } from "..";

export const ProductContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '7.2rem',
    width: '100%',
    height: '100%',
    maxWidth: 1180,
    maxHeight: 656,
    
});

export const ImageContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '57.6rem',
    borderRadius: 8,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
});

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: '2.6rem',

    button: {
        width: '100%',
        height: '6.9rem',
        backgroundColor: '$green-500',
        color: 'white',
        fontSize: '$sl',
        lineHeight: '160%',
        fontWeight: 'bold',
        borderRadius: 8,
    },
});

export const DescriptionContainer = styled('div', {
    h1: {
        fontSize: '$xl',
        fontWeight: 'bold',
        lineHeight: '140%',
        color: '$gray-300',
        marginBottom: '1.6rem',
    },

    h2: {
        fontSize: '$xl',
        lineHeight: '140%',
        fontWeight: 'normal',
        color: '$green-300',
        marginBottom:'4rem',
    },

    p: {
        fontSize: '$sl',
        lineHeight: '160%',
        fontWeight: 'normal',
        color: '$gray-300',
        marginBottom:'4rem',
    },
});