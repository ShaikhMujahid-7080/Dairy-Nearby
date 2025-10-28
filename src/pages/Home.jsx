import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = [
	{ key: 'Milk', emoji: '🥛' },
	{ key: 'Yogurt', emoji: '🍶' },
	{ key: 'Cheese', emoji: '🧀' },
	{ key: 'Butter', emoji: '🧈' },
]

export default function Home() {
	return (
		<div>
			<Hero />
			<section className="container py-8">
				<div className="flex gap-3 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none]">
					{categories.map(c => (
						<div key={c.key} className="shrink-0 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm bg-white">
							<span className="text-lg">{c.emoji}</span>
							<span>{c.key}</span>
						</div>
					))}
				</div>
			</section>
			<section className="container py-8">
				<h2 className="text-2xl font-semibold">Featured products</h2>
				<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{products.map(p => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			</section>
			<section className="container py-16">
				<div className="rounded-2xl bg-linear-to-br from-brand/10 to-brand-300/20 p-10 text-center">
					<h3 className="text-2xl font-semibold">Subscribe for weekly fresh deliveries</h3>
					<p className="mt-2 text-gray-600">Get 10% off on your first subscription order.</p>
					<form className="mt-6 mx-auto max-w-md flex gap-2">
						<input className="flex-1 rounded-lg border border-gray-300 px-4 py-3" placeholder="Enter your email" />
						<button className="rounded-lg bg-brand text-white px-5 py-3 font-medium hover:bg-brand-600">Subscribe</button>
					</form>
				</div>
			</section>
		</div>
	)
}
