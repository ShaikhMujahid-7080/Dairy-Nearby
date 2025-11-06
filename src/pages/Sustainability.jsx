import { Leaf, Recycle, Truck, Heart, Sprout, Eye } from 'lucide-react'

export default function Sustainability() {
	const commitments = [
		{
			icon: Recycle,
			title: 'Reduce Waste & Emissions',
			description: 'We use reusable glass bottles and biodegradable packaging materials. Our delivery routes are optimized to minimize carbon footprint.',
			color: 'text-green-600 dark:text-green-400'
		},
		{
			icon: Sprout,
			title: 'Support Regenerative Agriculture',
			description: 'We partner with farms that practice sustainable farming methods, helping restore soil health and biodiversity.',
			color: 'text-emerald-600 dark:text-emerald-400'
		},
		{
			icon: Eye,
			title: 'Transparent Supply Chain',
			description: 'Every product comes with a QR code that lets you trace its journey from farm to your doorstep, ensuring complete transparency.',
			color: 'text-blue-600 dark:text-blue-400'
		},
		{
			icon: Heart,
			title: 'Humane Animal Welfare',
			description: 'All our partner farms follow strict animal welfare standards, ensuring happy, healthy cows that produce quality milk.',
			color: 'text-pink-600 dark:text-pink-400'
		},
		{
			icon: Truck,
			title: 'Local Sourcing',
			description: 'We source from local farms within 50km radius, reducing transportation emissions and supporting local communities.',
			color: 'text-orange-600 dark:text-orange-400'
		},
		{
			icon: Leaf,
			title: 'Eco-Friendly Operations',
			description: 'Our entire operation is designed with sustainability in mind, from packaging to delivery methods.',
			color: 'text-teal-600 dark:text-teal-400'
		}
	]

	return (
		<div className="relative">
			{/* Hero section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-950 dark:to-emerald-950 py-20">
				<div className="absolute inset-0 opacity-30" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
				}}></div>
				<div className="container relative z-10">
					<div className="text-center max-w-3xl mx-auto">
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
							<Leaf className="size-10 text-green-600 dark:text-green-400" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							Sustainability
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
							We prioritize local sourcing, minimal transport, and recyclable packaging. Our partners follow humane animal welfare standards, ensuring a sustainable future for dairy farming.
						</p>
					</div>
				</div>
			</section>

			{/* Our commitments */}
			<section className="container py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
						Our Commitments
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400">
						Building a sustainable future, one delivery at a time
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{commitments.map((commitment, index) => {
						const Icon = commitment.icon
						return (
							<div key={index} className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-400 hover:shadow-lg transition-all duration-300">
								<div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 mb-4 ${commitment.color}`}>
									<Icon className="size-7" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
									{commitment.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
									{commitment.description}
								</p>
							</div>
						)
					})}
				</div>
			</section>

			{/* Impact section */}
			<section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-950 py-16">
				<div className="container">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
							Our Environmental Impact
						</h2>
						<div className="grid md:grid-cols-3 gap-8 mt-8">
							<div className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur">
								<div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">95%</div>
								<div className="text-gray-600 dark:text-gray-400">Less Plastic Waste</div>
							</div>
							<div className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur">
								<div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50km</div>
								<div className="text-gray-600 dark:text-gray-400">Average Delivery Radius</div>
							</div>
							<div className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur">
								<div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
								<div className="text-gray-600 dark:text-gray-400">Reusable Packaging</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
