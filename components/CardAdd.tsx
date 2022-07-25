import Link from 'next/link';
import { Plus } from 'phosphor-react';

interface prop {
    description: String,
    link: String
}

export default function CardAdd(props: prop) {
    return (
        <Link href={`${props.link}`}>
            <div className="card-add d-flex align-items-center justify-content-between m-3">
                <div className="icon-content d-flex justify-content-center align-items-center">
                    <Plus size={32} color="#ED1B49" />
                </div>

                <span className="text-i-title col-9">
                    { props.description }
                </span>
            </div>
        </Link>
    )
}