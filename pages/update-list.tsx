import { NextPage } from "next";
import { ContextApp } from "../ContextApp";
import { CaretRight, Plus } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { product } from "../Types";

import Header from "../components/Header";
import SimpleCard from "../components/SimpleCard";
import { listService } from "../services/listService";
import { useRouter } from "next/router";

const serviceList = new listService();
interface obj {
	[key: string]: any
}

const complete: NextPage = () => {
	const { list, setList } = useContext(ContextApp);
	const [total, setTotal] = useState<String | Number>('0,00');
	const [listCategory, setListCategory] = useState<Array<String>>([]) 
	const route = useRouter();

	const getQtdeCategorys = () => {
		let arrayCategorys = new Array<String>();
		list.products.forEach(e => { if (!arrayCategorys.includes(e.categoryTitle)) arrayCategorys.push(e.categoryTitle) });

		setListCategory(arrayCategorys);
	}

	const getList = async () => {
		if (!list.id) {
			let urlParams = new URLSearchParams(window.location.search);
			let listId = urlParams.get('listId');
			
			await serviceList.getList({ id: listId }).then(async response => {
				let data = response.find((elem:any) => elem.id == listId)
				await setList(data);
			});
		}
	}

	const calcSoma = () => {
		let soma = 0;
		list.products.forEach(elem => {
			soma += Number(elem.price);
		});

		setTotal(soma);
	}

	useEffect(() => {
		getList();
		calcSoma();
		getQtdeCategorys();
	},[list]);

	return (
		<div id="complete" className="d-flex flex-column p-5">
			<Header
				routeDescription={`Lista ${list.id}`}
			/>

			<div className="d-flex mt-5 col-7">
				<aside>
					<SimpleCard
						id={list.id}
						qtdCategoria={listCategory.length}
						qtdItens={list.products.length}
						event={() => {}}
						listItens={undefined}
						total={`${total}`}
					/>
				</aside>

				<div className="p-2 mt-3">
					<CaretRight size={27} />
				</div>

				<div className="form p-4 col-8">
					{
						listCategory.length > 0 &&

						listCategory.map((elem, index) => {
							return (
								<div key={`category-${index}`}>
									<h2 className="text-i" style={index != 0 ? { marginTop: '20px' } : {}}>{ elem }</h2>

									{
										list.products.map((product, idx) => {
											if (product.categoryTitle === elem) {
												return (
													<div key={`product-${idx}`} className="d-flex col-12 align-items-center product-line justify-content-between">
														<div className="col-auto d-flex align-items-center">
															<input type="checkbox" id={`product-${idx}`} />
															<label htmlFor={`product-${idx}`} className="text-i-title ms-2 cursor-pointer">{ product.name }</label>
														</div>

														<div className="col-auto d-flex align-items-center">
															<span className="text-i me-1">{`R$${String(product.price).replace('.', ',')} / ${product.type === 'unit' ? 'Un':'Kg' }`}</span>

															<button className="content-operation d-flex justify-content-center align-items-center">
																<div className="sub"></div>
															</button>

															<span className="text-m" style={{ width: '10px', maxWidth: '10px', textAlign: 'center', fontSize: '16px', fontWeight: 500 }}>{ `${product.quantity}` }</span>

															<button className="content-operation d-flex justify-content-center align-items-center">
																<Plus size={18} />
															</button>
														</div>
													</div>
												)
											}
										})
									}
								</div>
							)
						})
					}

				</div>
			</div>
		</div>
	)
}

export default complete;










