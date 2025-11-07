import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Milk, Sparkles, Truck, Leaf, CalendarDays, Droplet, Clock, Recycle, Star } from 'lucide-react'
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

const journey = [
	{
		title: 'Morning milking',
		detail: 'Partner farms collect milk at sunrise and run quality checks within 30 minutes.',
		icon: Droplet
	},
	{
		title: 'Chill & seal',
		detail: 'Milk is flash-chilled, sealed with traceable QR codes, and loaded into insulated vans.',
		icon: Recycle
	},
	{
		title: 'Route optimization',
		detail: 'Our logistics team maps the quickest community drops to keep everything under 8 hours.',
		icon: Clock
	},
	{
		title: 'Doorstep delight',
		detail: 'Reusable bottles land at your door with freshness guaranteed and zero plastic waste.',
		icon: Truck
	}
]

const testimonials = [
	{
		name: 'Radhika, Pune',
		avatar: '🧑🏽‍🍳',
		quote: 'The weekly paneer plan saves me grocery runs and the kids love the taste. The QR traceability earns extra trust.'
	},
	{
		name: 'Harsh & Priya, Mumbai',
		avatar: '👨‍👩‍👧',
		quote: 'Switched to the family bundle—delivery is consistent, bottles are spotless, and the app reminders are super helpful.'
	},
	{
		name: 'Chef Neel, Aurangabad',
		avatar: '👨🏻‍🍳',
		quote: 'Their cultured butter and Greek yogurt elevated our desserts. The standing order feature is a lifesaver for the kitchen.'
	}
]

const subscriptionPlans = {
	Daily: [
		{ title: 'Morning Essentials', price: '₹89/day', description: '1L milk + 200g yogurt. Perfect for a small family.' },
		{ title: 'Protein Power', price: '₹129/day', description: '1L lactose-free milk + 2 protein yogurts + 100g cheese slices.' }
	],
	Weekly: [
		{ title: 'Family Pantry', price: '₹699/week', description: '7L milk mix, 500g butter, 500g paneer. Flexible delivery slots.' },
		{ title: 'Brunch Lovers', price: '₹829/week', description: 'Artisanal cheeses, Greek yogurt tubs, flavored butter sticks.' }
	],
	Monthly: [
		{ title: 'Smart Saver', price: '₹2499/month', description: 'Bulk pricing on milk + yogurt with complimentary glass bottle rotation.' },
		{ title: 'Café Partner', price: '₹3899/month', description: 'Ideal for cafés—daily deliveries, invoice summaries, free training on latte art milk.' }
	]
}

const stats = [
	{ label: 'Communities served', value: '120+' },
	{ label: 'Bottles reused monthly', value: '35K' },
	{ label: 'Avg. freshness window', value: '6h 12m' }
]

export default function Home() {
	const [planType, setPlanType] = useState('Daily')
	const plans = useMemo(() => subscriptionPlans[planType], [planType])

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

			{/* Subscription plans */}
			<section className="container py-12">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
					<div>
						<p className="text-sm uppercase tracking-wide text-brand dark:text-brand-300 font-semibold">Flexible plans</p>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">Tailor deliveries to your routine</h2>
						<p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">Switch between daily, weekly, or monthly bundles anytime. Plans auto-adjust for vacations and festival spikes.</p>
					</div>
					<div className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full p-1">
						{Object.keys(subscriptionPlans).map(type => (
							<button
								key={type}
								onClick={() => setPlanType(type)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${planType === type ? 'bg-brand text-white dark:bg-brand-300 dark:text-gray-900 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300'}`}
							>
								{type}
							</button>
						))}
					</div>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{plans.map(plan => (
						<div key={plan.title} className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 p-6 shadow-sm hover:shadow-lg transition-all">
							<div className="absolute -top-16 -right-10 w-36 h-36 bg-brand/10 dark:bg-brand-300/20 rounded-full blur-3xl" aria-hidden="true"></div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{plan.title}</h3>
							<p className="text-brand dark:text-brand-300 text-lg font-semibold mb-4">{plan.price}</p>
							<p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
							<Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-brand dark:text-brand-300 hover:underline">
								Customize this plan
							</Link>
						</div>
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

			{/* Farm journey timeline */}
			<section className="container py-16">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
					<div>
						<p className="text-sm uppercase tracking-wide text-brand dark:text-brand-300 font-semibold">Farm-to-door journey</p>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">Freshness you can trace</h2>
						<p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl">Follow the path every bottle takes before it reaches you. Each step is timestamped and available through the QR code on the bottle cap.</p>
					</div>
					<div className="flex gap-8">
						{stats.map(stat => (
							<div key={stat.label} className="text-center">
								<div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
								<div className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
				<div className="grid md:grid-cols-4 gap-6">
					{journey.map(step => {
						const Icon = step.icon
						return (
							<div key={step.title} className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all">
								<div className="flex items-center gap-3 mb-4">
									<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-300">
										<Icon className="size-6" />
									</div>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{step.title}</h3>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.detail}</p>
							</div>
						)
					})}
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-gradient-to-br from-brand/5 to-brand-300/10 dark:from-brand/10 dark:to-brand-300/20 py-16">
				<div className="container">
					<div className="text-center mb-10">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-brand/20 dark:border-brand/30 text-brand dark:text-brand-300 text-sm font-semibold mb-4">
							<Star className="size-4" /> Loved by households across Maharashtra
						</div>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Stories we pour our hearts into</h2>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map(testimonial => (
							<div key={testimonial.name} className="rounded-2xl bg-white dark:bg-gray-900 border border-brand/10 dark:border-brand/20 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
								<div className="flex items-center gap-3 mb-4">
									<div className="text-3xl" aria-hidden="true">{testimonial.avatar}</div>
									<div>
										<p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
										<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Verified subscriber</p>
									</div>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{testimonial.quote}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
