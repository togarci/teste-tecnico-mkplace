import type { NextPage } from "next";
import Header from "../components/Header";
import SimpleCard from "../components/SimpleCard";
import { CaretRight } from "phosphor-react";
import Upload from "../components/Upload";

const createList: NextPage = () => {
    return (
        <div id="createList" className="d-flex flex-column h-100 p-5">
            <Header
                routeDescription="Criando Lista de Compras"
            />

            <div className="d-flex mt-5">
                <aside>
                    <SimpleCard/>
                    <button className="btn-second mt-3">
                        Concluir lista
                    </button>
                </aside>
                
                <div className="p-2 mt-3">
                    <CaretRight size={27} />
                </div>

                <form className="p-4 col-7" action="">
                    <div className="d-flex flex-column">
                        <label className="text-i">Selecione categoria do produto</label>
                        <div className="select mt-2">
                            <select name="categoria" className="col-12">
                                <option value="">Pesquise por uma categoria. Ex. Enlatados</option>
                            </select>
                        </div>
                    </div>

                    <div className="d-flex mt-4 flex-column">
                        <label className="text-i">Selecione uma subcategoria do produto</label>
                        <div className="select mt-2">
                            <select name="categoria" className="col-12">
                                <option value="">Pesquise por uma categoria. Ex. Conservantes</option>
                            </select>
                        </div>
                    </div>

                    <div className="d-flex flex-column mt-4">
                        <label className="text-i">Nome do produto</label>
                        <input className="mt-2" type="text" placeholder="e.g Milho verde em conserva" />
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                        <div className="d-flex flex-column col-5">
                            <label className="text-i-title">Selecione uma subcategoria do produto</label>
                            <div className="select mt-2">
                                <select name="categoria" className="col-12">
                                    <option value="">Unidade</option>
                                </select>
                            </div>
                        </div>

                        <div className="d-flex flex-column col-3">
                            <label className="text-i-title">Preço</label>
                            <input className="mt-2" type="text" placeholder="R$" />
                        </div>
                        
                        <div className="d-flex flex-column col-3">
                            <label className="text-i-title">Quantidade</label>
                            <input className="mt-2" type="text" placeholder="R$" />
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <Upload />
                    </div>

                    <hr />

                    <button className="btn-primary">Adicionar Item</button>
                </form>
            </div>
        </div>
    )
}

export default createList;