import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Delivery from './pages/Delivery'
import Sustainability from './pages/Sustainability'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'

function App() {
	return (
		<RootLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/delivery" element={<Delivery />} />
				<Route path="/sustainability" element={<Sustainability />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</RootLayout>
	)
}

export default App
