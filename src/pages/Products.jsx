import { Milk, Filter, Search, ArrowUpDown, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useMemo, useState } from 'react'

const categories = ['All', 'Milk', 'Yogurt', 'Cheese', 'Butter']

export default function Products() {
	const [activeCategory, setActiveCategory] = useState('All')
	const [query, setQuery] = useState('')
	const [maxPrice, setMaxPrice] = useState(1000)
	const [sort, setSort] = useState('relevance')

	const filtered = useMemo(() => {
		let list = [...products]
		if (activeCategory !== 'All') {
			list = list.filter(p => p.category === activeCategory)
		}
		if (query.trim()) {
			const q = query.toLowerCase()
			list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
		}
		list = list.filter(p => p.price <= maxPrice)
		switch (sort) {
			case 'price-asc':
				list.sort((a, b) => a.price - b.price); break
			case 'price-desc':
				list.sort((a, b) => b.price - a.price); break
			case 'name-asc':
				list.sort((a, b) => a.name.localeCompare(b.name)); break
			default:
				break
		}
		return list
	}, [activeCategory, query, maxPrice, sort])
	return (
		<div className="relative">
			{/* Hero section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-brand/10 via-brand-300/10 to-brand/5 dark:from-brand/20 dark:via-brand-300/20 dark:to-brand/10 py-16">
				<div className="absolute inset-0 opacity-30" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
				}}></div>
				<div className="container relative z-10">
					<div className="text-center max-w-3xl mx-auto">
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand/20 dark:bg-brand/30 mb-6">
							<Milk className="size-10 text-brand" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							Our Fresh Dairy Collection
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Discover our complete range of farm-fresh dairy products, sourced directly from local farms and delivered to your doorstep within 8 hours.
						</p>
					</div>
				</div>
			</section>

			{/* Filters */}
			<section className="container pt-10">
				<div className="flex flex-wrap items-center gap-3">
					{categories.map(cat => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className={`px-4 py-2 rounded-full border text-sm font-medium transition-all cursor-pointer ${activeCategory === cat ? 'bg-brand text-white border-brand dark:bg-brand-300 dark:text-gray-900 dark:border-brand-300' : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-brand dark:hover:border-brand-300'}`}
						>
							{cat}
						</button>
					))}
					<div className="ml-auto flex items-center gap-2">
						<div className="relative">
							<Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
							<input
								value={query}
								onChange={e => setQuery(e.target.value)}
								placeholder="Search products..."
								className="pl-9 pr-8 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300"
							/>
							{query && (
								<button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" onClick={() => setQuery('')} aria-label="Clear search">
									<X className="size-4" />
								</button>
							)}
						</div>
						<div className="flex items-center gap-2">
							<Filter className="size-4 text-gray-400" />
							<input type="range" min={50} max={1000} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="w-40" />
							<span className="text-sm text-gray-600 dark:text-gray-400">Up to ₹{maxPrice}</span>
						</div>
						<div className="relative">
							<select value={sort} onChange={e => setSort(e.target.value)} className="pl-8 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300">
								<option value="relevance">Sort: Relevance</option>
								<option value="price-asc">Price: Low to High</option>
								<option value="price-desc">Price: High to Low</option>
								<option value="name-asc">Name: A → Z</option>
							</select>
							<ArrowUpDown className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
						</div>
					</div>
				</div>
			</section>

			{/* Products grid */}
			<section className="container py-12">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{filtered.map(p => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			</section>
		</div>
	)
}
