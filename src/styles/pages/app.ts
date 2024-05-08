import { keyframes } from "@stitches/react";
import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'calc(100vh - 7rem)',
    width: '100vw',
    overflow: 'hidden',
});

export const Header = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1180,
    margin: '3.2rem 0',

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$gray-700',
        padding: '1.2rem',
        borderRadius: 6,
        color: '$gray-500',
        position: 'relative',

        span: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            border: '3px solid $gray-900',
            position: 'absolute',
            right: '-25%',
            top: '-25%',
            backgroundColor: '$green-500',
            color: 'white',
            width: '2.7rem',
            height: '2.7rem',
            borderRadius: '100%',
        }
    },
});

const slideIn  = keyframes({
    from: {
        transform: 'translateX(100%)',
    },
    to: {
        transform: 'translateX(0)',
    },
  });

  const slideOut  = keyframes({
    from: {
        transform: 'translateX(0)',
    },
    to: {
        transform: 'translateX(100%)',
    },
  });
  

export const CartSideSheet = styled(Dialog.Content, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '48rem',
    height: '100vh',
    zIndex: 10000,
    backgroundColor: '$gray-700',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '2.8rem',
    overflow: 'hidden',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  
    '&[data-state="open"]': {
        animation: `${slideIn} 400ms ease-out`,
    },

    '&[data-state="closed"]': {
        animation: `${slideOut} 400ms ease-out`,
    },

});


export const CloseButton = styled(Dialog.Close, {
    display: 'flex',
    background: 'none',
    color: '$gray-500',

});

export const SideSheetContent = styled('div', {
    width: '100%',
    height: '100%',
    padding: '2.4rem',
    overflowY: 'auto',

    [`.radixTitle`]: {
        fontSize: '$md',
        lineHeight: '160%',
        fontWeight: 'bold',
        color: '$gray-100',
        marginBottom: '3.2rem',
    },
});

export const SideSheetProductContainer = styled('div', {
    display: 'flex',
    width: '100%',
    gap: '2rem',
    marginBottom: '2.4rem',

    [`.imageContainer`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15rem',
        height: '9.3rem',
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: 8,
    },
    
    [`.textContainer`]: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        h1: {
            fontSize: '$sl',
            fontWeight: 'normal',
            lineHeight: '160%',
            color: '$gray-300',
        },

        h2: {
            fontSize: '$sl',
            fontWeight: 'bold',
            lineHeight: '160%',
            color: '$gray-100',
            marginBottom: '0.8rem',
        },

        button: {
            background: 'none',
            fontSize: '$sl',
            lineHeight: '160%',
            fontWeight: 'bold',
            color: '$green-500',
            width: 'fit-content'
        },
    },
});

export const SideSheetTotal = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '2.4rem',

    [`.amountContainer`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        p: {
            fontSize: '1.6rem',
            lineHeight: '160%',
            fontWeight: 'normal',
            color: '$gray-100',
        },

        span: {
            fontSize: '1.8rem',
            lineHeight: '160%',
            fontWeight: 'normal',
            color: '$gray-300',
        },
    },

    [`.priceContainer`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        p: {
            fontSize: '1.8rem',
            lineHeight: '160%',
            fontWeight: 'bold',
            color: '$gray-100',
        },

        span: {
            fontSize: '2.4rem',
            lineHeight: '160%',
            fontWeight: 'bold',
            color: '$gray-100',
        },
    },

    button: {
        height: '6.9rem',
        backgroundColor: '$green-500',
        color: 'white',
        fontSize: '$sl',
        fontWeight: 'bold',
        lineHeight: '160%',
        borderRadius: 8,
        marginTop: '5.7rem',

        '&:active': {
            transform: 'scale(0.97)'
          }
    },
});
