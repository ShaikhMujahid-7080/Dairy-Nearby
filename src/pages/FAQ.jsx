import { HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null)
	
	const faqs = [
		{ 
			q: 'Where do you source your dairy?', 
			a: 'We partner with small, vetted local farms within a 50km radius. All our farms follow strict quality and animal welfare standards. You can trace the origin of every product using the QR code on the packaging.' 
		},
		{ 
			q: 'Do you offer subscriptions?', 
			a: 'Yes! We offer flexible weekly and monthly subscription plans. You can customize your delivery schedule, skip deliveries, or cancel anytime. Subscribers get 10% off on all products and free delivery.' 
		},
		{ 
			q: 'What is your delivery area?', 
			a: 'We currently deliver within the city limits and nearby suburbs. Our delivery radius is approximately 50km from our central facility. Enter your address during checkout to see if we deliver to your area.' 
		},
		{ 
			q: 'How fresh are your products?', 
			a: 'All our dairy products are delivered within 8 hours of milking. We use insulated, eco-friendly packaging to maintain freshness and temperature during transit.' 
		},
		{ 
			q: 'What packaging do you use?', 
			a: 'We use reusable glass bottles and biodegradable insulation materials. Our packaging is 100% recyclable and designed to keep your dairy products fresh and cool during delivery.' 
		},
		{ 
			q: 'Can I track my order?', 
			a: 'Yes! Once you place an order, you\'ll receive a tracking link via email and SMS. You can track your order in real-time from our website or mobile app.' 
		},
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
							<HelpCircle className="size-10 text-brand" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							Frequently Asked Questions
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Everything you need to know about Dairy Nearby
						</p>
					</div>
				</div>
			</section>

			{/* FAQ List */}
			<section className="container py-16">
				<dl className="max-w-3xl mx-auto space-y-4">
					{faqs.map((f, i) => {
						const isOpen = openIndex === i
						return (
							<div 
								key={i} 
								className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
							>
								<dt 
									className="p-5 cursor-pointer flex items-center justify-between gap-4"
									onClick={() => setOpenIndex(isOpen ? null : i)}
								>
									<span className="font-semibold text-gray-900 dark:text-gray-100 pr-4">{f.q}</span>
									<ChevronDown 
										className={`size-5 text-brand flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
									/>
								</dt>
								<dd 
									className={`px-5 pb-5 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
										isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
									}`}
								>
									{f.a}
								</dd>
							</div>
						)
					})}
				</dl>
			</section>
		</div>
	)
}
