import './App.css'

import { Route, Routes } from 'react-router-dom'

import Buyuk from './pages/Buyuk'
import Carsi from './pages/Carsi'
import Main from './pages/Main'
import Su from './pages/Su'
import Yemek from './pages/Yemek'

const App = () => (
	<Routes>
		<Route path="/" element={<Main />} />
		<Route path="/buyuk" element={<Buyuk />} />
		<Route path="/su" element={<Su />} />
		<Route path="/yemek" element={<Yemek />} />
		<Route path="/carsi" element={<Carsi />} />
	</Routes>
)

export default App
