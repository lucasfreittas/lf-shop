import { styled } from "..";

export const HomeContainer = styled('section', {
    display: 'flex',
    gap: '4.8rem',
    height: 656,
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
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
    width: 696,
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

        div: {
            display: 'flex',
            flexDirection: 'column',
        },

        button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$gray-700',
            padding: '1.2rem',
            borderRadius: 6,
            color: '$gray-500',
        },  
    },
});