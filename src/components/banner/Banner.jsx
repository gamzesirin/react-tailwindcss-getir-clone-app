const Banner = () => {
	return (
		<div className=" container mx-auto py-10 m-5 flex justify-around items-center banner gap-5">
			<div className="flex gap-5 flex-col">
				<h2 className="text-3xl text-primary font-semibold"> İşletme sahibi misin?</h2>
				<p className="text-lg">
					GetirÇarşı işletme iş ortaklarından biri ol, işini daha az maliyetle büyüt, müşteri memnuniyetini artır.
				</p>
			</div>
			<div>
				<button className="text-primary bg-secondary rounded p-3">Hemen Başvur</button>
			</div>
		</div>
	)
}

export default Banner
