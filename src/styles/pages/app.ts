import { styled } from "..";

export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'calc(100vh - 7rem)',
    width: '100%',
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
    },
});