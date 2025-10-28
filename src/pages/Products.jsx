import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
	return (
		<section className="container py-12">
			<div className="flex items-end justify-between gap-4">
				<h1 className="text-3xl font-bold tracking-tight">All products</h1>
			</div>
			<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{products.map(p => (
					<ProductCard key={p.id} product={p} />
				))}
			</div>
		</section>
	)
}
