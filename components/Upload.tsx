import { CloudArrowUp } from "phosphor-react"

export default function Upload() {
    return (
        <div className="d-flex justify-content-center upload">
            <CloudArrowUp size={40} weight="bold" color="#5D5D5B"/>

            <div className="d-flex ms-2 flex-column">
                <span className="text-m-title">
                    Arraste o arquivo ou clique aqui para selecionar
                </span>
                <span className="text-m">
                    PNG, GIF ou JPEG. Tamanho máximo de arquivo 1 Mb.
                </span>
            </div>
        </div>
    )
}