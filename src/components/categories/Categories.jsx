import { useEffect, useState } from 'react'

import Category from '../ui/Category'
import CategoryData from '../../api/categories.json'

// import categories.json

const Categories = () => {
	const [categories, setCategories] = useState([])
	useEffect(() => {
		setCategories(CategoryData)
	}, [])
	return (
		<div className="p-5 bg-white shadow-lg transition duration-300 ease-in-out">
			<div className="container mx-auto px-32">
				<h3 className="font-semibold text-sm mb-3 px-8">Kategoriler</h3>
				<div className="grid grid-cols-10">
					{categories && categories.map((category, index) => <Category key={index} category={category} />)}
				</div>
			</div>
		</div>
	)
}

export default Categories
