const Campaings = () => {
	return (
		<div className="flex items-center justify-between bg-brandColor container mx-auto rounded-xl  m-4">
			<div className="flex flex-col gap-y-5 px-32 ">
				<h1 className="text-white text-3xl font-semibold">Getiri indir!</h1>
				<p className="text-white ">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
				<div>
					<ul className="flex items-center gap-x-4">
						<li>
							<div>
								<img
									src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
									alt="resim"
								/>
							</div>
						</li>
						<li>
							<div>
								<img
									src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
									alt="resim"
								/>
							</div>
						</li>
						<li>
							<div>
								<img
									src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
									alt="resim"
								/>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="pt-5">
				<img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="resim" />
			</div>
		</div>
	)
}

export default Campaings
