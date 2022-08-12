import { FileText, CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';

interface prop {
	id: number,
	qtdCategoria: Number,
	qtdItens: Number,
	event: (id: number) => void | undefined
	listItens: ReactNode | undefined
	total: string | undefined
}

export default function SimpleCard(props: prop) {
	const emitEvent = () => {
		props.event(props.id)
	}

	return (
		<button onClick={emitEvent} className="simple-card d-flex flex-column">
			<div className='d-flex align-items-center justify-content-between col-12'>
				<div className="icon-content d-flex justify-content-center align-items-center">
					<FileText size={32} color="#4F4F4F" />
				</div>

				<div className="d-flex flex-column col-7">
					<b className="text-i-title">{ `Lista ${props.id}` } </b>
					<span className="text-i"> { `${props.qtdCategoria} categorias / ${props.qtdItens } itens` }</span>
				</div>
				<CaretRight size={32} />
			</div>
			
			{ props.listItens && props.listItens }

			{ props.total && 

				<div className="d-flex justify-content-between mt-3 col-12">
					<b className='text-i-title'>Total do carrinho</b>
					<b className="text-i-title">{ `R$${String(props.total).replace('.', ',')}` }</b>
				</div>
			
			
			}
		</button>
	)
}