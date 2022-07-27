import { FileText, CaretRight } from 'phosphor-react';

interface prop {
    id: number,
    qtdCategoria: Number,
    qtdItens: Number,
    event: (id: number) => void | undefined
}

export default function SimpleCard(props: prop) {
    const emitEvent = () => {
        props.event(props.id)
    }

    return (
        <button onClick={emitEvent} className="simple-card d-flex align-items-center justify-content-between">
            <div className="icon-content d-flex justify-content-center align-items-center">
                <FileText size={32} color="#4F4F4F" />
            </div>

            <div className="d-flex flex-column col-7">
                <b className="text-i-title">{ `Lista ${props.id}` } </b>
                <span className="text-i"> { `${props.qtdCategoria} categorias / ${props.qtdItens } itens` }</span>
            </div>

            <CaretRight size={32} />
        </button>
    )
}