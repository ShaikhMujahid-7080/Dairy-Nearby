import { useParams, Link } from 'react-router-dom'
import { ShoppingCart, Truck, Leaf, Shield, ArrowLeft, Check } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/currency'

export default function ProductDetail() {
	const { id } = useParams()
	const product = products.find(p => p.id === id)
	const { addItem } = useCart()

	if (!product) {
		return (
			<div className="container py-12 text-center">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Product not found</h1>
				<Link 
					to="/products"
					className="inline-flex items-center gap-2 text-brand hover:text-brand-600 dark:hover:text-brand-200 transition-colors cursor-pointer"
				>
					<ArrowLeft className="size-4" />
					Back to Products
				</Link>
			</div>
		)
	}

	const features = [
		{ icon: Truck, text: '8-hour delivery guarantee' },
		{ icon: Leaf, text: 'Eco-friendly packaging' },
		{ icon: Shield, text: 'Quality assured' }
	]

	return (
		<div className="relative">
			{/* Breadcrumb */}
			<section className="container py-6">
				<div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
					<Link to="/" className="hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">Home</Link>
					<span>/</span>
					<Link to="/products" className="hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">Products</Link>
					<span>/</span>
					<span className="text-gray-900 dark:text-gray-100">{product.name}</span>
				</div>
			</section>

			{/* Product details */}
			<section className="container py-8">
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Product image */}
					<div className="relative">
						<div className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
							<img src={product.image} alt={product.name} className="w-full h-[500px] object-cover" />
						</div>
						<div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand/90 dark:bg-brand-300/90 text-white dark:text-gray-900 text-sm font-medium backdrop-blur-sm">
							Fresh Daily
						</div>
					</div>

					{/* Product info */}
					<div>
						<div className="mb-4">
							<span className="inline-block px-3 py-1 rounded-full bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-300 text-sm font-medium">
								{product.category}
							</span>
						</div>
						<h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{product.name}</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{product.description}</p>
						
						{/* Price */}
						<div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-brand/5 to-brand-300/10 dark:from-brand/10 dark:to-brand-300/20 border border-brand/20 dark:border-brand/30">
							<div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Price</div>
							<div className="text-4xl font-bold text-gray-900 dark:text-gray-100">{formatPrice(product.price)}</div>
						</div>

						{/* Features */}
						<div className="mb-6 space-y-2">
							{features.map((feature, index) => {
								const Icon = feature.icon
								return (
									<div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
										<div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 dark:bg-brand/20">
											<Icon className="size-4 text-brand" />
										</div>
										<span className="text-sm">{feature.text}</span>
									</div>
								)
							})}
						</div>

						{/* Add to cart */}
						<div className="space-y-3">
							<button 
								className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-6 py-4 text-lg font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900" 
								onClick={() => addItem(product)}
							>
								<ShoppingCart className="size-5" />
								Add to cart
							</button>
							<Link 
								to="/products"
								className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-4 text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all duration-200 cursor-pointer"
							>
								<ArrowLeft className="size-5" />
								Continue Shopping
							</Link>
						</div>

						{/* Additional info */}
						<div className="mt-8 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800">
							<h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Product Information</h3>
							<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
								<li className="flex items-start gap-2">
									<Check className="size-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
									<span>Delivered within 8 hours of milking</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="size-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
									<span>Traceable via QR code on packaging</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="size-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
									<span>Eco-friendly reusable glass packaging</span>
								</li>
								<li className="flex items-start gap-2">
									<Check className="size-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
									<span>100% satisfaction guarantee</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
