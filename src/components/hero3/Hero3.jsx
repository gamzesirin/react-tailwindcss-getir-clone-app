const Hero3 = () => {
	return (
		<div className="relative h-[600px]">
			<div>
				<div className="relative h-[600px]">
					<img className="w-full h-full" src="https://cdn.getir.com/getirweb_images/popup_splash.png" alt="resim" />
				</div>

				<div className="absolute inset-0 bg-gradient-to-r from-brandColor to-transparent bg-"></div>
			</div>
			<div className="container p-48 h-full absolute top-0 left-1/2 -translate-x-1/2 z-20 flex justify-start items-center">
				<p className="text-white font-semibold text-3xl">
					Hizmetimizi artık sadece uygulamamız üzerinden veriyoruz. <br /> Şimdi Getir uygulamasını indir, siparişini
					ver,
					<br />
					dilediğin su markası bayiden kapına gelsin.
				</p>
			</div>
		</div>
	)
}

export default Hero3
