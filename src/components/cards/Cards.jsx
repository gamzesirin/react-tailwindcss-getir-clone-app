import { useEffect, useState } from 'react'

import CardData from '../../api/cards.json'

const Cards = () => {
	const [cards, setCards] = useState([])
	useEffect(() => {
		setCards(CardData)
	}, [])
	return (
		<div className="grid grid-cols-3 container mx-auto p-10">
			{cards.length &&
				cards.map((card, index) => (
					<div key={index}>
						<div className="bg-white shadow-lg p-5 m-5 text-center ">
							<img src={card.image} alt={card.title} className="w-full h-64 object-fill" />
							<h3 className="font-semibold text-lg mt-4 text-primary ">{card.title}</h3>
							<p className="text-xs text-gray-500 mt-2">{card.description}</p>
						</div>
					</div>
				))}
		</div>
	)
}

export default Cards
