const Category = ({ category: { id, title, img } }) => {
	return (
		<div className="flex flex-col gap-y-2 items-center text-center p-4 transition hover:bg-purple-50 rounded">
			<img src={img} alt={title} className="w-12 h-12 rounded " />
			<a href="#" className="text-sm text-gray-700 font-semibold">
				{title}
			</a>
		</div>
	)
}

export default Category
