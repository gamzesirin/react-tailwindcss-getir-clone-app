import { useEffect, useState } from 'react'

import KitchenData from '../../api/kitchens.json'

const Kitchen = () => {
	const [kitchen, setKitchen] = useState([])
	useEffect(() => {
		setKitchen(KitchenData)
	}, [])
	return (
		<div>
			<div className="m-5 p-5">
				<h3 className="pl-48 font-semibold ">Mutfaklar</h3>
				<div className="container mx-auto grid grid-cols-6">
					{kitchen &&
						kitchen.map((kitchen, index) => (
							<div key={index} className="flex flex-col justify-center items-center gap-3">
								<img className="w-32 h-32" src={kitchen.image} alt={kitchen.title} />
								<h4 className="text-center">{kitchen.title}</h4>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default Kitchen
