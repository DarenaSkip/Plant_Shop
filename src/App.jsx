import CategoriesSection from "./components/CategoriesSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Title from "./components/Title";
import TopBanner from "./components/TopBanner";
import Selling from "./components/Selling";


export default function App() {
	return(<>
		<TopBanner />
		<Header />
    <Hero /> 
	<CategoriesSection />
	<Selling />
	</>);
}