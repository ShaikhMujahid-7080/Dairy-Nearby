import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Milk, Menu } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
	const { items } = useCart()
	const count = items.reduce((n, i) => n + i.quantity, 0)
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
			<div className="container flex items-center justify-between py-3">
				<Link to="/" className="inline-flex items-center gap-2 text-xl font-semibold">
					<Milk className="size-6 text-brand" />
					<span>Dairy Nearby</span>
				</Link>

				<nav className="hidden md:flex items-center gap-6">
					<NavLink to="/products" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-gray-700 hover:text-gray-900'}>Products</NavLink>
					<NavLink to="/about" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-gray-700 hover:text-gray-900'}>About</NavLink>
					<NavLink to="/delivery" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-gray-700 hover:text-gray-900'}>Delivery</NavLink>
					<NavLink to="/sustainability" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-gray-700 hover:text-gray-900'}>Sustainability</NavLink>
					<NavLink to="/faq" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-gray-700 hover:text-gray-900'}>FAQ</NavLink>
					<NavLink to="/careers" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-gray-700 hover:text-gray-900'}>Careers</NavLink>
					<NavLink to="/contact" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-gray-700 hover:text-gray-900'}>Contact</NavLink>
					<NavLink to="/cart" className="relative inline-flex items-center">
						<ShoppingCart className="size-6" />
						{count > 0 && (
							<span className="absolute -top-2 -right-2 text-xs bg-brand text-white rounded-full px-1.5 py-0.5">{count}</span>
						)}
					</NavLink>
				</nav>

				<button className="md:hidden inline-flex items-center p-2 rounded-lg border border-gray-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
					<Menu className="size-6" />
				</button>
			</div>

			{open && (
				<div className="md:hidden border-t border-gray-100 bg-white">
					<div className="container py-3 flex flex-col gap-3">
						<NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
						<NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
						<NavLink to="/delivery" onClick={() => setOpen(false)}>Delivery</NavLink>
						<NavLink to="/sustainability" onClick={() => setOpen(false)}>Sustainability</NavLink>
						<NavLink to="/faq" onClick={() => setOpen(false)}>FAQ</NavLink>
						<NavLink to="/careers" onClick={() => setOpen(false)}>Careers</NavLink>
						<NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
						<NavLink to="/cart" onClick={() => setOpen(false)} className="inline-flex items-center gap-2">
							<ShoppingCart className="size-5" /> Cart ({count})
						</NavLink>
					</div>
				</div>
			)}
		</header>
	)
}
