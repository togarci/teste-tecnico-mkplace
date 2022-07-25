import { FileText, CaretRight } from 'phosphor-react';

export default function SimpleCard() {
    return (
        <div className="simple-card d-flex align-items-center justify-content-between">
            <div className="icon-content d-flex justify-content-center align-items-center">
                <FileText size={32} color="#4F4F4F" />
            </div>

            <div className="d-flex flex-column col-7">
                <b className="text-i-title">Lista 56854</b>
                <span className="text-i"> 1 categorias / 1 itens </span>
            </div>

            <CaretRight size={32} />
        </div>
    )
}