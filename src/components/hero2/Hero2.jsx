import ReactFlagsSelect from 'react-flags-select'
import { useState } from 'react'

const Hero2 = () => {
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
		<div className="relative h-[600px]">
			<div>
				<div className="relative h-[600px]">
					<img
						className="w-full h-full"
						src="https://i0.wp.com/trendyer.com/wp-content/uploads/2022/10/adana-kebap-adana-ne-yenir-trendyer.jpg?resize=1024%2C576&ssl=1"
						alt=""
					/>
				</div>
			</div>
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

export default Hero2
