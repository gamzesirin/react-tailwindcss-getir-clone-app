import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useEffect, useState } from 'react'

import KitchenData2 from '../../api/kitchens.json'
import Slider from 'react-slick'

function Kitchen2() {
	const [kitchens, setKitchens] = useState([])

	useEffect(() => {
		setKitchens(KitchenData2)
	}, [])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}

	return (
		<div className="kitchen2 mx-auto max-w-screen-xl px-4">
			<Slider {...settings}>
				{kitchens.map((kitchen, index) => (
					<div key={index} className="p-4">
						<div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg shadow-lg overflow-hidden">
							<img className="w-full h-auto object-fill" src={kitchen.image} alt={kitchen.title} />
							<div className="p-4">
								<h4 className="text-center text-xl font-semibold">{kitchen.title}</h4>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Kitchen2
