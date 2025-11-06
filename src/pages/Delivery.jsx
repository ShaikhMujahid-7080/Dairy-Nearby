import { Truck, Clock, Package, IndianRupee, MapPin, Shield } from 'lucide-react'
import { formatPrice } from '../utils/currency'

export default function Delivery() {
	const deliveryInfo = [
		{
			icon: Clock,
			title: 'Delivery Hours',
			description: 'We deliver 7 days a week between 7am and 8pm. Same-day delivery available for orders before 2pm.',
			color: 'text-blue-600 dark:text-blue-400'
		},
		{
			icon: Package,
			title: 'Eco-Friendly Packaging',
			description: 'Insulated, recyclable packaging keeps your dairy fresh and cool. We use reusable glass bottles and biodegradable insulation.',
			color: 'text-green-600 dark:text-green-400'
		},
		{
			icon: Shield,
			title: 'Freshness Guarantee',
			description: 'All products are delivered within 8 hours of milking. If you\'re not satisfied, we\'ll replace it free of charge.',
			color: 'text-purple-600 dark:text-purple-400'
		}
	]

	return (
		<div className="relative">
			{/* Hero section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-brand/10 via-brand-300/10 to-brand/5 dark:from-brand/20 dark:via-brand-300/20 dark:to-brand/10 py-20">
				<div className="absolute inset-0 opacity-30" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
				}}></div>
				<div className="container relative z-10">
					<div className="text-center max-w-3xl mx-auto">
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand/20 dark:bg-brand/30 mb-6">
							<Truck className="size-10 text-brand" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							Delivery Information
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Fast, reliable, and eco-friendly delivery straight to your doorstep
						</p>
					</div>
				</div>
			</section>

			{/* Delivery details */}
			<section className="container py-16">
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{deliveryInfo.map((info, index) => {
						const Icon = info.icon
						return (
							<div key={index} className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand dark:hover:border-brand-300 hover:shadow-lg transition-all duration-300">
								<div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand/10 to-brand-300/20 dark:from-brand/20 dark:to-brand-300/30 mb-4 ${info.color}`}>
									<Icon className="size-7" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
									{info.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
									{info.description}
								</p>
							</div>
						)
					})}
				</div>

				{/* Delivery fees */}
				<div className="max-w-2xl mx-auto">
					<div className="p-8 rounded-2xl bg-gradient-to-br from-brand/5 to-brand-300/10 dark:from-brand/10 dark:to-brand-300/20 border border-brand/20 dark:border-brand/30">
						<div className="flex items-start gap-4">
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/20 dark:bg-brand/30">
								<IndianRupee className="size-6 text-brand" />
							</div>
							<div className="flex-1">
								<h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
									Delivery Fees
								</h3>
								<div className="space-y-2 text-gray-700 dark:text-gray-300">
									<p className="flex items-center gap-2">
										<span className="font-semibold">Free delivery</span> on orders over {formatPrice(2000)}
									</p>
									<p className="flex items-center gap-2">
										<span className="font-semibold">Standard delivery:</span> {formatPrice(50)} for orders below {formatPrice(2000)}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
										All delivery fees are clearly displayed at checkout. No hidden charges!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
