import { Link } from 'react-router-dom'
import { Milk, Sparkles, Truck, Leaf } from 'lucide-react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = [
	{ key: 'Milk', emoji: '🥛', color: 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30' },
	{ key: 'Yogurt', emoji: '🍶', color: 'from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30' },
	{ key: 'Cheese', emoji: '🧀', color: 'from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30' },
	{ key: 'Butter', emoji: '🧈', color: 'from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30' },
]

const features = [
	{
		icon: Truck,
		title: '8-Hour Delivery',
		description: 'From farm to your doorstep in just 8 hours',
		color: 'text-blue-600 dark:text-blue-400'
	},
	{
		icon: Leaf,
		title: 'Eco-Friendly',
		description: '100% reusable packaging, zero plastic waste',
		color: 'text-green-600 dark:text-green-400'
	},
	{
		icon: Sparkles,
		title: 'Farm Fresh',
		description: 'Directly sourced from local partner farms',
		color: 'text-purple-600 dark:text-purple-400'
	}
]

export default function Home() {
	return (
		<div>
			<Hero />
			
			{/* Categories */}
			<section className="container py-12">
				<div className="text-center mb-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Shop by Category</h2>
					<p className="text-gray-600 dark:text-gray-400">Browse our fresh dairy collection</p>
				</div>
				<div className="flex gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] pb-2">
					{categories.map(c => (
						<Link
							key={c.key}
							to="/products"
							className="group shrink-0 inline-flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 px-6 py-3 bg-gradient-to-br bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:border-brand dark:hover:border-brand-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
						>
							<span className="text-2xl group-hover:scale-110 transition-transform">{c.emoji}</span>
							<span className="font-medium">{c.key}</span>
						</Link>
					))}
				</div>
			</section>

			{/* Products */}
			<section className="container py-12">
				<div className="text-center mb-10">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 dark:bg-brand/20 mb-4">
						<Milk className="size-8 text-brand" />
					</div>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
						Our Fresh Products
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Handpicked from local farms, delivered fresh to your door within 8 hours of milking
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{products.map(p => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			</section>

			{/* Features */}
			<section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
				<div className="container">
					<div className="text-center mb-10">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
							Why Choose Dairy Nearby?
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Experience the difference of truly fresh dairy
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{features.map((feature, index) => {
							const Icon = feature.icon
							return (
								<div key={index} className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand dark:hover:border-brand-300 hover:shadow-lg transition-all duration-300">
									<div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand/10 to-brand-300/20 dark:from-brand/20 dark:to-brand-300/30 mb-4 ${feature.color}`}>
										<Icon className="size-8" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400">
										{feature.description}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</div>
	)
}
