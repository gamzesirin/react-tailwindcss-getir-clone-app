import './App.css'

import { Route, Routes } from 'react-router-dom'

import Buyuk from './pages/buyuk'
import Carsi from './pages/carsi'
import Main from './pages/main'
import Su from './pages/su'
import Yemek from './pages/yemek'

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
