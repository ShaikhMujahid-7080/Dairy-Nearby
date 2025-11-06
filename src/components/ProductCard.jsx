import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/currency'
import Img from './Img'

export default function ProductCard({ product }) {
	const { addItem } = useCart()
	return (
		<div className="group rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
			<Link to={`/products/${product.id}`} className="block aspect-4/3 overflow-hidden cursor-pointer">
				<Img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
			</Link>
			<div className="p-4">
				<Link to={`/products/${product.id}`} className="font-medium hover:underline line-clamp-1 text-gray-900 dark:text-gray-100 cursor-pointer transition-colors">{product.name}</Link>
				<p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{product.description}</p>
				<div className="mt-3 flex items-center justify-between">
					<div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{formatPrice(product.price)}</div>
					<button 
						className="inline-flex items-center justify-center rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-3 py-1.5 text-sm font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900" 
						onClick={() => addItem(product)}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	)
}
