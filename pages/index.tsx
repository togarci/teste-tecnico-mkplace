import type { NextPage } from "next";
import Image from "next/image";
import CardAdd from "../components/CardAdd";
import SimpleCard from "../components/SimpleCard";

const Home: NextPage = () => {
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
			
			<SimpleCard/>
			<CardAdd 
				description={'Criar uma lista de compras'}
				link="/create-list"
			/>
		</div>
	);
};

export default Home;
