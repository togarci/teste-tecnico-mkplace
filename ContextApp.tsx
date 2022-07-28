import React, { Dispatch, SetStateAction, useState } from "react";
import { lista, childrenComponent } from "./Types";


const initialValue = {
	list: {
		id: 0,
		products: [],
		qtdeCategoria: 0,
		qtdeItens: 0
	},
	setList: () => {},
	img: null,
	setImg: () => {}
}

interface typeProp {
	list: lista;
	setList: Dispatch<SetStateAction<{ id: number; products: never[]; qtdeCategoria: number; qtdeItens: number; }>>;
	img: File | null,
	setImg: Dispatch<SetStateAction<null>> | Dispatch<SetStateAction<File>>
}

export const ContextApp = React.createContext<typeProp>(initialValue);

export const AppProvider = ({ children }: childrenComponent) => {
	const [list, setList] = useState(initialValue.list);
	const [img, setImg] = useState(initialValue.img);

	return (
		<ContextApp.Provider value={{ list, setList, img, setImg }}>
			{ children }
		</ContextApp.Provider>
	)
};