import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ContextAppProps {
    children: ReactNode
}

const initialValue = {
    list: {},
    setList: () => {}
}


interface product {
    categoryTitle: String,
    name: String,
    quantity: Number,
    type: String,
    price: Number
}
interface lista {
    id: Number,
    products: Array<product>
    qtdeCategoria: Number,
    qtdeItens: Number
}

type typeProp = {
    list: Object;
    setList: Dispatch<SetStateAction<never[]>>;
}

export const ContextApp = React.createContext<typeProp>(initialValue);

export const AppProvider = ({ children }: ContextAppProps) => {
    const [list, setList] = useState(initialValue.list);
    return (
        <ContextApp.Provider value={{ list, setList }}>
            { children }
        </ContextApp.Provider>
    )
}; 