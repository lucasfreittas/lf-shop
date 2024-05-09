import { styled } from "..";

export const SuccessContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '10.4rem',
});

export const ImagesContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '4.8rem',

    [`.imageContainer`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: '100%',
        width: '14rem',
        height: '14rem',
        margin: '0 -2rem',
        boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
    },

});

export const SuccessTextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '59.0rem',

    h1: {
        fontSize: '$xl',
        lineHeight: '140%',
        color: '$gray-100',
        fontWeight: 'bold',
        marginBottom: '2.4rem',
        textAlign: 'center',
    },

    p: {
        fontSize: '$lg',
        lineHeight: '140%',
        color: '$gray-300',
        fontWeight: 'normal',
        marginBottom: '6.4rem',
        textAlign: 'center',
    },

    button: {
        fontSize: '$md',
        lineHeight: '160%',
        color: '$green-500',
        fontWeight: 'bold',
        marginBottom: '6.4rem',
        textAlign: 'center',
        background: 'transparent',
    },
});