import Campaings from '../components/campaings/Campaings'
import Cards from '../components/cards/Cards'
import Categories from '../components/Categories/Categories'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HeroSection from '../components/herosection/HeroSection'

const Main = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<Categories />
			<Campaings />
			<Cards />
			<Footer />
		</>
	)
}

export default Main
