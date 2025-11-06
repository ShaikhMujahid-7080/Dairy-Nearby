import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Careers() {
	const roles = [
		{ 
			title: 'Operations Associate', 
			location: 'On-site', 
			type: 'Full-time',
			description: 'Manage daily operations, coordinate with local farms, and ensure quality standards.',
			icon: Briefcase
		},
		{ 
			title: 'Customer Support Specialist', 
			location: 'Remote', 
			type: 'Full-time',
			description: 'Help customers with orders, subscriptions, and provide exceptional service experience.',
			icon: Briefcase
		},
		{ 
			title: 'Frontend Engineer', 
			location: 'Hybrid', 
			type: 'Contract',
			description: 'Build and maintain our web platform using React, ensuring great user experience.',
			icon: Briefcase
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
							<Briefcase className="size-10 text-brand" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							Join Our Team
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Help us revolutionize the way people experience fresh dairy. Join our growing team bringing farm-fresh products to communities.
						</p>
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="container py-16">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
						Open Positions
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400">
						We're always looking for passionate people to join our mission
					</p>
				</div>
				<div className="max-w-4xl mx-auto space-y-4">
					{roles.map((r, idx) => {
						const Icon = r.icon
						return (
							<div key={idx} className="group rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg hover:border-brand dark:hover:border-brand-300 transition-all duration-300">
								<div className="flex items-start gap-4">
									<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 dark:bg-brand/20 flex-shrink-0">
										<Icon className="size-6 text-brand" />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{r.title}</h3>
										<p className="text-gray-600 dark:text-gray-400 mb-3">{r.description}</p>
										<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
											<div className="flex items-center gap-1">
												<MapPin className="size-4" />
												<span>{r.location}</span>
											</div>
											<div className="flex items-center gap-1">
												<Clock className="size-4" />
												<span>{r.type}</span>
											</div>
										</div>
										<button className="inline-flex items-center gap-2 rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900">
											Apply Now
											<ArrowRight className="size-4" />
										</button>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</section>
		</div>
	)
}
