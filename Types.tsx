import { ReactNode } from "react"

export interface childrenComponent {
    children: ReactNode
}

export interface product {
    categoryTitle: String,
    name: String,
    quantity: Number,
    type: String,
    price: Number | String
}
export interface productList {
    categoryTitle: String,
    name: String,
    quantity: Number,
    type: String,
    price: Number | String,
    imageUrl: string | ArrayBuffer | null
}

export interface lista {
    id: number,
    products: product[],
    qtdeCategoria: number,
    qtdeItens: number
}