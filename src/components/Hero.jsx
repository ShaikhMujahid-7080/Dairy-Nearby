import { Link } from 'react-router-dom'
import Img from './Img'

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="container grid lg:grid-cols-2 gap-10 items-center py-16">
				<div className="animate-[fadeIn_700ms_ease-out_both]">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						Fresh dairy, delivered with care.
					</h1>
					<p className="mt-4 text-gray-600 max-w-prose">
						Discover locally sourced milk, yogurt, cheese, and more. We partner with small farms to bring freshness to your table.
					</p>
					<div className="mt-6 flex gap-3">
						<Link to="/products" className="inline-flex items-center justify-center rounded-lg bg-brand text-white px-5 py-3 font-medium hover:bg-brand-600 transition-colors">Shop Products</Link>
						<Link to="/about" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50">Learn More</Link>
					</div>
				</div>
				<div className="relative animate-[fadeIn_900ms_ease-out_both]">
					<Img src="https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1600&auto=format&fit=crop" alt="Fresh milk being poured into a glass" className="rounded-2xl w-full h-[320px] md:h-[420px] object-cover shadow-xl" />
					<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
				</div>
			</div>
		</section>
	)
}
