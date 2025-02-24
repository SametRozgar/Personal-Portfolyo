import { useState } from "react";

export function useLocalStorage (key,initialValue)
{
    const [storedvalue,setStoredValue]=useState(()=>{
        const item=localStorage.getItem(key);
        return item? JSON.parse(item):initialValue;
    })


    const setValue =(value)=>
    {
        setStoredValue(value);
        localStorage.setItem(key,JSON.stringify(value))

    }



   return [storedvalue,setValue]

}

