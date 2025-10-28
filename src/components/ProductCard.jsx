import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Img from './Img'

export default function ProductCard({ product }) {
	const { addItem } = useCart()
	return (
		<div className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
			<Link to={`/products/${product.id}`} className="block aspect-4/3 overflow-hidden">
				<Img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
			</Link>
			<div className="p-4">
				<Link to={`/products/${product.id}`} className="font-medium hover:underline line-clamp-1">{product.name}</Link>
				<p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
				<div className="mt-3 flex items-center justify-between">
					<div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
					<button className="inline-flex items-center rounded-lg bg-brand text-white px-3 py-1.5 text-sm hover:bg-brand-600 active:scale-[0.98] transition" onClick={() => addItem(product)}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	)
}
