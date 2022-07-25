import { NextPage } from "next";
import Header from "../components/Header";
import SimpleCard from "../components/SimpleCard";
import { CaretRight, Plus } from "phosphor-react";

const complete: NextPage = () => {
    return (
        <div id="complete" className="d-flex flex-column p-5">
            <Header routeDescription={'Lista 56431'}/>

            <div className="d-flex mt-5 col-7">
                <aside>
                    <SimpleCard/>
                </aside>

                <div className="p-2 mt-3">
                    <CaretRight size={27} />
                </div>

                <form className="p-4 col-8">
                    <h2 className="text-i">Enlatados</h2>
                    
                    <div className="d-flex col-12 align-items-center product-line justify-content-between">
                        <div className="col-auto d-flex align-items-center">
                            <input type="checkbox" name="" id="1" />
                            <label htmlFor="1" className="text-i-title ms-2 cursor-pointer">Milho verde</label>
                        </div>

                        <div className="col-auto d-flex align-items-center">
                            <span className="text-i">R$0,00 / Un</span>

                            <button className="content-operation d-flex justify-content-center align-items-center">
                                <div className="sub"></div>
                            </button>

                            <span className="text-m" style={{ fontSize: '16px', fontWeight: 500 }}>1</span>

                            <button className="content-operation d-flex justify-content-center align-items-center">
                                <Plus size={18} />
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default complete;