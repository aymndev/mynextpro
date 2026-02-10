"use client"
import { Children, createContext,useState } from "react";


export const CardContext = createContext();

export default function CardContextProvider ({children}){
    const [card,setCard]=useState([]);
    

    function addToCard(item){

        setCard([...card,item]);
    }
    {/*remove */}
    function removeFromCard(item){
        setCard(card.filter((product)=>product.id != item.id));
    }
    return(

        <CardContext.Provider value={{card,addToCard,removeFromCard}}>
            {children}

        </CardContext.Provider>
    );


}