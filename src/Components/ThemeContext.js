import React from 'react';

export const themes ={
    dark: {
        color:'white',
        background: 'black'
    },
    light:{
        color:'black',
        background: '#869dda'
    }  
    };
    const ThemeContext = React.createContext(themes.light);
    export default ThemeContext;