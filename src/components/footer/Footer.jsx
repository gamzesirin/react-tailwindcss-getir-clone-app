const Footer = () => {
	return (
		<div className="">
			<div className="container mx-auto py-5">
				<div className="grid grid-cols-5">
					<section className="items-center p-5">
						<h3 className="text-lg font-semibold text-primary text-center mb-5">Getiri İndir!</h3>
						<div>
							<ul className="flex flex-col items-center gap-y-4">
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
					</section>
					<section className="items-center p-5">
						<h3 className="text-lg font-semibold text-primary  mb-5">Getiri keşfet</h3>
						<ul className="flex flex-col gap-y-3">
							<li>Getiri Hakkında</li>
							<li>Kariyer</li>
							<li>İletişim</li>
							<li>COVID-19 Duyuru</li>
							<li>Sosyal Sorumluluk Projeleri</li>
							<li>Basın Projeleri</li>
						</ul>
					</section>
					<section className="items-center p-5">
						<h3 className="text-lg font-semibold text-primary mb-5">Yardıma mı ihtiyacın var?</h3>
						<ul className="flex flex-col gap-y-3">
							<li>Sıkça Sorulan Sorular</li>
							<li>Kişisel Verilerin Korunması</li>
							<li>Gizlilik Politikası</li>
							<li>Kullanım Koşulları</li>
							<li>Çerez Politikası</li>
							<li>İşlem Rehberi</li>
						</ul>
					</section>
					<section className="items-center p-5">
						<h3 className="text-lg font-semibold text-primary  mb-5">İş Ortağımız Ol</h3>
						<ul className="flex flex-col gap-y-3">
							<li>Bayimiz Olun</li>
							<li>Restoranını Getir’e Ekle</li>
							<li>GetirYemek Restoranı Ol</li>
							<li>GetirÇarşı İşletmesi Ol</li>
						</ul>
					</section>
					<section className="items-center p-5">
						<div>
							<img src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="resim" />
						</div>
					</section>
				</div>
				<hr className="border-bottom-black border-1px" />
				<div className="flex items-center justify-center mt-6">
					<p>© 2024 Getir . Bilgi Toplumu Hizmetleri</p>{' '}
				</div>
			</div>
		</div>
	)
}

export default Footer
