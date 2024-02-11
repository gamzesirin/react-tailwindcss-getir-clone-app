import ReactFlagsSelect from 'react-flags-select'
import Slider from 'react-slick'
import { useState } from 'react'

const HeroSection = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	}

	const [selected, setSelected] = useState('TR')
	const phones = {
		US: '+1',
		GB: '+44',
		FR: '+33',
		DE: '+49',
		IT: '+39',
		TR: '+90'
	}

	return (
		<div className="relative h-[500px]">
			<Slider {...settings}>
				<div className="relative w-full h-[500px]">
					<img
						className="w-full h-full object-cover"
						src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
						alt="Slide 1"
					/>

					<div className="absolute inset-0 bg-gradient-to-r from-brandColor to-transparent"></div>
				</div>
				<div className="relative w-full h-[500px]">
					<img
						className="w-full h-full object-cover"
						src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
						alt="Slide 2"
					/>

					<div className="absolute inset-0 bg-gradient-to-r from-brandColor to-transparent"></div>
				</div>
				<div className="relative w-full h-[500px]">
					<img
						className="w-full h-full object-cover"
						src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
						alt="Slide 2"
					/>

					<div className="absolute inset-0 bg-gradient-to-r from-brandColor to-transparent"></div>
				</div>
				<div className="relative w-full h-[500px]">
					<img
						className="w-full h-full object-cover"
						src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
						alt="Slide 2"
					/>

					<div className="absolute inset-0 bg-gradient-to-r from-brandColor to-transparent"></div>
				</div>
			</Slider>
			<div className="container h-full absolute top-0 left-1/2 -translate-x-1/2 z-20 flex justify-around items-center">
				<div>
					<img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="logo" />
					<h2 className="text-4xl text-white font-semibold mt-8">Dakikalar içinde kapında</h2>
				</div>
				<div className="rounded-lg w-[400px] bg-gray-50 p-6 text-primary font-semibold text-center">
					<h4 className=" mb-4">Giriş Yap veya Kayıt Ol</h4>
					<div className="flex gap-x-2">
						<ReactFlagsSelect
							countries={Object.keys(phones)}
							customLabels={phones}
							onSelect={(code) => setSelected(code)}
							selected={selected}
							className="flag-select"
						/>
						<div className="flex-1 relative">
							<input
								placeholder="Telefon Numarası"
								type="text"
								className="h-14 px-4 border-2 rounded w-full border-gray-200 hover:border-brandColor outline-none focus:border-brandColor"
							/>
						</div>
					</div>
					<button className="bg-secondary h-12 flex items-center rounded-md w-full justify-center text-sm font-semibold text-primary mt-2 hover:bg-primary hover:text-secondary">
						Telefon Numarası ile Devam Et
					</button>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
