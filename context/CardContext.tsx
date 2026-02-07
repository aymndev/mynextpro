"use client"
import { Children, createContext,useState } from "react";

export const CardContext = createContext();

export default function CardContextProvider ({children}){
    const [card,setCard]=useState([]);

    function addToCard(item){

        setCard([...card,item]);
    }
    {/*remove */}
    return(

        <CardContext.Provider value={{card,addToCard}}>
            {children}

        </CardContext.Provider>
    );


}