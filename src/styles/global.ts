import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },

      html: {
        fontSize: '62.5%',
        overflow: 'hidden',
      },
    
      body: {
        backgroundColor: '$gray-900',

        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased',
      },
    
      'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
      },

      button: {
        border: 'none',
        outline: 'none',
        transition: 'all 0.1s ease-in-out',
        

        '&:hover': {
          cursor: 'pointer',
          filter: 'brightness(1.2)',
        },

        '&:active': {
          transform: 'scale(0.9)'
        }
      }
});