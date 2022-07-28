import { CloudArrowUp, File } from "phosphor-react"
import { useContext, useState } from "react"
import { ContextApp } from "../ContextApp"

export default function Upload() {
	const { img, setImg } = useContext(ContextApp);
	
	return (
		<label htmlFor="upload" className="d-flex justify-content-center upload">
			{ img ?
			
			<div className="d-flex align-items-center">
				<File size={32} weight="bold" />
				<div className="text-m-title ms-2">{img.name}</div>
			</div>
			
			:

			<div className="d-flex">
				<input 
					style={{ display: 'none' }} 
					type="file" 
					name="upload" 
					id="upload"
					onChange={(evt: any) => setImg(evt.target.files[0])}/>
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
			}
		</label>
	)
}