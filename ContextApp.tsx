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
	file: null,
	setFile: () => {}
}

interface typeProp {
	list: lista;
	setList: (lista: lista) => void;
	file: string | null | ArrayBuffer;
	setFile: (value: null | ArrayBuffer | string) => void;
}

export const ContextApp = React.createContext<typeProp>(initialValue);

export const AppProvider = ({ children }: childrenComponent) => {
	const [list, setList] = useState<lista>(initialValue.list);
	const [file, setFile] = useState<null | string | ArrayBuffer>(initialValue.file);

	return (
		<ContextApp.Provider value={{ list, setList, file, setFile }}>
			{ children }
		</ContextApp.Provider>
	)
};