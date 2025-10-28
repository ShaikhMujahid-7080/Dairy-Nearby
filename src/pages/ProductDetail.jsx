import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
	const { id } = useParams()
	const product = products.find(p => p.id === id)
	const { addItem } = useCart()

	if (!product) return <div className="container py-12">Product not found.</div>

	return (
		<section className="container py-12 grid lg:grid-cols-2 gap-8">
			<div className="rounded-2xl overflow-hidden border border-gray-200">
				<img src={product.image} alt={product.name} className="w-full h-[380px] object-cover" />
			</div>
			<div>
				<h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
				<p className="mt-3 text-gray-600">{product.description}</p>
				<div className="mt-5 text-3xl font-semibold">${product.price.toFixed(2)}</div>
				<div className="mt-6 flex gap-3">
					<button className="inline-flex items-center rounded-lg bg-brand text-white px-5 py-3 font-medium hover:bg-brand-600" onClick={() => addItem(product)}>
						Add to cart
					</button>
				</div>
			</div>
		</section>
	)
}
