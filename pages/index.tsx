import { useContext, useEffect, useState } from "react";
import { ContextApp } from "../ContextApp";
import { listService } from "../services/listService";
import { lista } from "../Types";

import type { NextPage } from "next";

import Image from "next/image";
import Router from "next/router";
import CardAdd from "../components/CardAdd";
import SimpleCard from "../components/SimpleCard";

const serviceList = new listService();

const Home: NextPage = () => {
	const [dataLista, setDataLista] = useState(new Array());
	const { list, setList } = useContext(ContextApp);

	useEffect(() => {
		getList();
	}, [])

	const getList = () => {
		serviceList.getList().then(resp => {
			const dataList = resp.map((elem: lista) => {
				let listCategoria = new Array();
				elem.products.forEach(e => { if (!listCategoria.includes(e.categoryTitle)) listCategoria.push(e.categoryTitle) });
				elem.qtdeCategoria = listCategoria.length;
				elem.qtdeItens = elem.products.length;

				return elem;
			});

			setDataLista(dataList);
		});
	}

	const haddleEdit = (id: number) => {
		let lista = dataLista.find(elem => elem.id === id);
		setList(lista);
		Router.push('/update-list');
	}

	return (
		<div id="indexPage" className="d-flex flex-column justify-content-center align-items-center col-12">

			<div className="mb-4">
				<Image
					src="/logo-mkplace.png"
					alt="logo"
					width={290}
					height={55}
				/>
			</div>

			{
				list &&
					dataLista.map(elem =>
						<SimpleCard
							key={`simpleCard-${elem.id}`}
							id={elem.id}
							qtdCategoria={elem.qtdeCategoria}
							qtdItens={elem.qtdeItens}
							event={haddleEdit}
						/>
					)

			}

			<CardAdd
				description={'Criar uma lista de compras'}
				link="/create-list"
			/>
		</div>
	);
};

export default Home;
