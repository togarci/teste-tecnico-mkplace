import { CaretRight, Minus, Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import { categoryService } from '../services/categoryService';
import { productService } from '../services/productService';

import type { NextPage } from "next";

import Header from "../components/Header";
import SimpleCard from "../components/SimpleCard";
import Upload from "../components/Upload";
import { product } from "../Types";

const serviceCategory = new categoryService();
const serviceProduct = new productService();

const createList: NextPage = () => {
	const [newList, setNewList] = useState({
		id: 0,
		products: new Array<product>(),
		qtdeCategoria: 0,
	});

	const [categoryTitle, setCategoryTitle] = useState(String);
	const [subCategory, setSubCategory] = useState(String);
	const [name, setName] = useState(String);
	const [type, setType] = useState(String);
	const [price, setPrice]  = useState(String);
	const [quantity, setQuantity] = useState(1);

	const [listCategory, setListCategory] = useState(new Array());
	const [listSubCategory, setListSubCategory] = useState(new Array());
	const [listProducts, setListProducts] = useState(new Array());

	const getAllSelects = () => {
		const requestCategory =  serviceCategory.getCategoty();
		const requestSubCategory =  serviceCategory.getSubCategoty();
		const requestProducts = serviceProduct.getProduct();

		Promise.all([requestCategory, requestSubCategory, requestProducts])
		.then(response => {
			setListCategory(response[0])
			setListSubCategory(response[1])
			setListProducts(response[2])
		})
	}

	const clearForm = () => {
		setCategoryTitle('');
		setSubCategory('');
		setName('');
		setType('');
		setPrice('');
		setQuantity(1);
	}

	const addItens = () => {
		let arrayProducts = newList.products;
		arrayProducts.push({
			'categoryTitle': categoryTitle,
			'name': name,
			'type': type,
			'price': price,
			'quantity': quantity,
		});

		let arrayCategorys = new Array();
		arrayProducts.forEach(e => { if (!arrayCategorys.includes(e.categoryTitle)) arrayCategorys.push(e.categoryTitle) });

		let dataForm = {...newList, products: arrayProducts, qtdeCategoria: arrayCategorys.length};
		setNewList(dataForm);

		clearForm();
	}

	useEffect(() => {
		getAllSelects();
	}, [])

	return (
		<div id="createList" className="d-flex flex-column h-100 p-5">
			<Header
				routeDescription="Criando Lista de Compras"
				backRoute={'/'}
			/>

			<div className="d-flex mt-5">
				<aside>
					<SimpleCard
						id={newList.id}
						qtdCategoria={newList.qtdeCategoria}
						qtdItens={newList.products.length}
						event={() => {}}
					/>
					<button className="btn-second mt-3">
						Concluir lista
					</button>
				</aside>

				<div className="p-2 mt-3">
					<CaretRight size={27} />
				</div>

				<div className="form p-4 col-7">
					<div className="d-flex flex-column">
						<label className="text-i">Selecione categoria do produto</label>
						<div className="select mt-2">
							<select name="categoria" className="col-12" value={categoryTitle} onChange={evt => setCategoryTitle(evt.target.value)}>
								<option value="">Pesquise por uma categoria. Ex. Enlatados</option>
								{ listCategory.map(elem =>
									<option key={`category-${elem.id}`} value={elem.title}>{elem.title}</option>
								)}
							</select>
						</div>
					</div>

					<div className="d-flex mt-4 flex-column">
						<label className="text-i">Selecione uma subcategoria do produto</label>
						<div className="select mt-2">
							<select name="categoria" className="col-12" value={subCategory} onChange={evt => setSubCategory(evt.target.value)}>
								<option value="">Pesquise por uma categoria. Ex. Conservantes</option>
								{ listSubCategory.map(elem =>
									<option key={`category-${elem.id}`} value={elem.title}>{elem.title}</option>
								)}
							</select>
						</div>
					</div>

					<div className="d-flex flex-column mt-4">
						<label className="text-i">Nome do produto</label>
						<input className="mt-2 input" type="text" placeholder="e.g Milho verde em conserva" list="product" value={name} onChange={evt => setName(evt.target.value)}/>
						<datalist id="product">
							{ listProducts.map(elem =>
								<option key={`product-${elem.id}`} value={elem.name}>{elem.name}</option>
							)}
						</datalist>
					</div>

					<div className="d-flex justify-content-between mt-4">
						<div className="d-flex flex-column col-5">
							<label className="text-i">Tipo</label>
							<div className="select mt-2">
								<select name="categoria" className="col-12" value={type} onChange={evt => setType(evt.target.value)}>
									<option value="unit">Unidade</option>
									<option value="kg">Kilo</option>
								</select>
							</div>
						</div>

						<div className="d-flex flex-column col-3">
							<label className="text-i">Preço</label>
							<input
								className="mt-2 input"
								type="text"
								placeholder="R$"
								value={price}
								onChange={evt => setPrice(evt.target.value)}
							/>
						</div>

						<div className="d-flex flex-column col-3">
							<label className="text-i">Quantidade</label>

							<div className="d-flex col-12 mt-2 input justify-content-between">
								<Minus className="cursor-pointer" size={25} weight="bold" onClick={ () => setQuantity(quantity - 1)} />
								<input className="col-3 input-qtde" type="text" value={quantity} onChange={evt => setQuantity(Number(evt.target.value))} />
								<Plus className="cursor-pointer" size={25} weight="bold" onClick={ () => setQuantity(quantity + 1) } />
							</div>
						</div>
					</div>

					<div className="mt-4">
						<Upload />
					</div>

					<hr />

					<button onClick={addItens} className="btn-primary">Adicionar Item</button>
				</div>
			</div>
		</div>
	)
}

export default createList;