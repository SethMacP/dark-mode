import React from 'react'
import useLocalStorage from './useLocalStorage'

 const  useDarkMode = (key, value) => {

    const [darkValue, setDarkValue] = useLocalStorage(key);

    const setDark = value =>{
        setDarkValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    
    
    return [ darkValue, setDark ]
}
export default useDarkMode;