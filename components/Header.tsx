import Image from "next/image";
import { ArrowLeft } from 'phosphor-react';

interface prop {
    routeDescription: String
}

export default function Header(props: prop) {
    return (
        <header className="d-flex col-12 align-items-center">
            <Image
                src="/mkplate-icon.png" 
                alt="logo" 
                width={80}
                height={80}
            />

            <ArrowLeft className="ms-3 me-2" size={32} />
            
            <h1 className="p-0 m-0">{ props.routeDescription }</h1>
                
        </header>
    )
}