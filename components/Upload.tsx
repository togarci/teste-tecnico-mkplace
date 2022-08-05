import { CloudArrowUp, File } from "phosphor-react"
import { useContext, useState } from "react"
import { ContextApp } from "../ContextApp"
interface prop {
	accept: string
}

export default function Upload(props: prop) {
	const { file, setFile } = useContext(ContextApp);
	const [fileName, setFileName] = useState<string | null>(null);

	const getImgUrl = async (img: File) => {
		if (img) {
			setFileName(img.name);
			let url = new FileReader();
			url.readAsDataURL(img);
			url.onload = (e: any) => {
				let textImg = url.result;
				setFile(textImg);
			}
		}
	}

	return (
		<label htmlFor="upload" className="d-flex justify-content-center upload">
			<input
				style={{ display: 'none' }}
				type="file"
				name="upload"
				id="upload"
				accept={props.accept}
				onChange={(evt: any) => getImgUrl(evt.target.files[0])}
			/>

			{ file ?

			<div className="d-flex align-items-center">
				<File size={32} weight="bold" />
				<div className="text-m-title ms-2">{fileName}</div>
			</div>

			:

			<div className="d-flex">
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