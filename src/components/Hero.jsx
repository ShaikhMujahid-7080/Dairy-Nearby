import { Link } from 'react-router-dom'
import Img from './Img'
import FreshDairy from '../assets/Fresh-dairy.png'

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="container grid lg:grid-cols-2 gap-10 items-center py-16">
				<div className="animate-[fadeIn_700ms_ease-out_both]">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
						Fresh dairy, delivered with care.
					</h1>
					<p className="mt-4 text-gray-600 dark:text-gray-400 max-w-prose">
						Discover locally sourced milk, yogurt, cheese, and more. We partner with small farms to bring freshness to your table.
					</p>
					<div className="mt-6 flex gap-3">
						<Link 
							to="/products" 
							className="inline-flex items-center justify-center rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-5 py-3 font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900"
						>
							Shop Products
						</Link>
						<Link 
							to="/about" 
							className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-5 py-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
						>
							Learn More
						</Link>
					</div>
				</div>
				<div className="relative animate-[fadeIn_900ms_ease-out_both]">
					<Img src={FreshDairy} alt="Fresh milk being poured into a glass" className="rounded-2xl w-full h-[320px] md:h-[420px] object-cover shadow-xl dark:shadow-gray-900/50" />
					<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 dark:ring-gray-800/50" />
				</div>
			</div>
		</section>
	)
}
