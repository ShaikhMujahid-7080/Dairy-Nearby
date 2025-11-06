import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Milk, Menu, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
	const { items } = useCart()
	const { isDark, toggleTheme } = useTheme()
	const count = items.reduce((n, i) => n + i.quantity, 0)
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-100 dark:border-gray-800">
			<div className="container flex items-center justify-between py-3">
				<Link to="/" className="inline-flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-100 hover:opacity-80 transition-opacity cursor-pointer">
					<Milk className="size-6 text-brand" />
					<span>Dairy Nearby</span>
				</Link>

				<nav className="hidden md:flex items-center gap-6">
					<NavLink to="/products" className={({isActive}) => isActive ? 'text-brand font-medium dark:text-brand-300' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'}>Products</NavLink>
					<NavLink to="/about" className={({isActive}) => isActive ? 'text-brand font-medium dark:text-brand-300' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'}>About</NavLink>
					<NavLink to="/delivery" className={({isActive}) => isActive ? 'text-brand font-medium dark:text-brand-300' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'}>Delivery</NavLink>
					<NavLink to="/sustainability" className={({isActive}) => isActive ? 'text-brand font-medium dark:text-brand-300' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'}>Sustainability</NavLink>
					<NavLink to="/faq" className={({isActive}) => isActive ? 'text-brand font-medium dark:text-brand-300' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'}>FAQ</NavLink>
					<NavLink to="/careers" className={({isActive}) => isActive ? 'text-brand font-medium dark:text-brand-300' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'}>Careers</NavLink>
					<NavLink to="/contact" className={({isActive}) => isActive ? 'text-brand font-medium dark:text-brand-300' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'}>Contact</NavLink>
					<button
						onClick={toggleTheme}
						className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 active:scale-95 transition-all duration-200 cursor-pointer"
						aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
					>
						{/* Show Sun when in dark mode (action: switch to light). Show Moon when in light mode (action: switch to dark). */}
						{isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
					</button>
					<NavLink to="/cart" className="relative inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer">
						<ShoppingCart className="size-6" />
						{count > 0 && (
							<span className="absolute -top-2 -right-2 text-xs bg-brand dark:bg-brand-300 text-white dark:text-gray-900 rounded-full px-1.5 py-0.5 font-medium">{count}</span>
						)}
					</NavLink>
				</nav>

				<div className="md:hidden flex items-center gap-2">
					<button
						onClick={toggleTheme}
						className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all duration-200 cursor-pointer"
						aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
					>
						{isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
					</button>
					<button className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all duration-200 cursor-pointer" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
						<Menu className="size-6" />
					</button>
				</div>
			</div>

			{open && (
				<div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
					<div className="container py-3 flex flex-col gap-3">
						<NavLink to="/products" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">Products</NavLink>
						<NavLink to="/about" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">About</NavLink>
						<NavLink to="/delivery" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">Delivery</NavLink>
						<NavLink to="/sustainability" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">Sustainability</NavLink>
						<NavLink to="/faq" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">FAQ</NavLink>
						<NavLink to="/careers" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">Careers</NavLink>
						<NavLink to="/contact" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">Contact</NavLink>
						<NavLink to="/cart" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">
							<ShoppingCart className="size-5" /> Cart ({count})
						</NavLink>
					</div>
				</div>
			)}
		</header>
	)
}
