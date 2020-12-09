//example
//const [name, setName] = useLocalStorage('name', 'Dustin')



import React, {useState} from 'react'

const useLocalStorage = ( key, initialValue ) => {
    const [storedValue, setStoredValue] = useState(()=>{
        //check to see if storedValue exists in localStorage
        const item = window.localStorage.getItem(key);
        //if yes: return localStorage value
        return item ? JSON.parse(item) : initialValue
        //if no: return initialValue
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }


    return [storedValue , setValue ]
}

    


export default useLocalStorage;



//we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.