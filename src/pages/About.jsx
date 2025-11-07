import { Milk, QrCode, Recycle, Calendar, Heart, Shield, Leaf, Users } from 'lucide-react'

export default function About() {
	const features = [
		{
			icon: QrCode,
			title: 'Blockchain Transparency',
			description: 'Every milk container is sealed with a unique QR code, allowing customers to trace its journey from farm to doorstep.',
			color: 'text-blue-600 dark:text-blue-400'
		},
		{
			icon: Recycle,
			title: 'Eco-Friendly Packaging',
			description: 'We use reusable glass bottles, reducing plastic waste and promoting sustainability.',
			color: 'text-green-600 dark:text-green-400'
		},
		{
			icon: Calendar,
			title: 'Customizable Subscriptions',
			description: 'Choose daily, weekly, or monthly deliveries via our user-friendly app and website to fit your lifestyle.',
			color: 'text-purple-600 dark:text-purple-400'
		}
	]

	const values = [
		{ icon: Heart, title: 'Trust', description: 'Building relationships with local farmers and customers' },
		{ icon: Shield, title: 'Quality', description: 'Ensuring the highest standards in every product' },
		{ icon: Leaf, title: 'Sustainability', description: 'Committed to eco-friendly practices and local sourcing' }
	]

	const team = [
		{
			name: 'Shaikh Maaz',
			role: 'Founder & Product Strategist',
			focus: 'Vision & Partnerships',
			description: 'Cuts through customer feedback and market insights to keep Dairy Nearby grounded in real-world needs while building strong ties with partner farms and retailers.'
		},
		{
			name: 'Anam Mohammad',
			role: 'Brand & Experience Lead',
			focus: 'Design Systems',
			description: 'Shapes the tone of the brand across every touchpoint, crafting intuitive experiences that make trying sustainable dairy a delight for new and returning customers alike.'
		},
		{
			name: 'Saad Shaikh',
			role: 'Operations & Logistics Lead',
			focus: 'Cold-Chain Efficiency',
			description: 'Optimizes fulfillment timelines, helping field teams coordinate rapid pickups, quality checks, and doorstep deliveries within the 8-hour freshness window.'
		},
		{
			name: 'Siddhant Deore',
			role: 'Growth & Partnerships',
			focus: 'Community Programs',
			description: 'Builds win-win collaborations with local suppliers, housing communities, and cafés so that sustainably sourced dairy becomes part of their daily routines.'
		},
		{
			name: 'Mohammad Takhi Sameer',
			role: 'Quality & Compliance Specialist',
			focus: 'Food Safety',
			description: 'Leads the quality playbook, ensuring every batch meets FSSAI standards, traceability requirements, and our own stringent freshness benchmarks.'
		},
		{
			name: 'Shaikh Mujahid',
			role: 'Full-Stack Engineer & Experience Owner',
			focus: 'Platform Reliability',
			description: 'Designs and builds the digital experience end-to-end—from blazing fast storefronts to stable APIs—while piloting new features that keep the brand close to its customers.'
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
							<Milk className="size-10 text-brand" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							About Dairy Nearby
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
							Dairy Nearby is a farm-to-door milk delivery service committed to providing pure, fresh, and traceable dairy products. We source milk directly from local farms and deliver it within 8 hours of milking, ensuring maximum freshness and nutritional value.
						</p>
					</div>
				</div>
			</section>

			{/* What sets us apart */}
			<section className="container py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
						What Sets Us Apart?
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400">
						Innovation meets tradition in every bottle
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature, index) => {
						const Icon = feature.icon
						return (
							<div key={index} className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand dark:hover:border-brand-300 hover:shadow-lg transition-all duration-300">
								<div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand/10 to-brand-300/20 dark:from-brand/20 dark:to-brand-300/30 mb-4 ${feature.color}`}>
									<Icon className="size-7" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
									{feature.description}
								</p>
							</div>
						)
					})}
				</div>
			</section>

			{/* Our values */}
			<section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
				<div className="container">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
							Our Values
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							At Dairy Nearby, we believe in trust, quality, and sustainability, revolutionizing the way you experience fresh dairy.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						{values.map((value, index) => {
							const Icon = value.icon
							return (
								<div key={index} className="text-center p-6">
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 dark:bg-brand/20 mb-4">
										<Icon className="size-8 text-brand" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
										{value.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-400">
										{value.description}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="container py-16">
				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 dark:bg-brand/20 mb-4">
						<Users className="size-7 text-brand" />
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
						Meet the Team
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
						A multidisciplinary crew turns sustainable dairy into a dependable weekly habit—combining product thinking, design, engineering, and rigorous supply-chain know-how.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
					{team.map(member => (
						<div key={member.name} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand dark:hover:border-brand-300 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-start justify-between gap-4">
								<div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{member.name}</h3>
									<p className="text-sm uppercase tracking-wide text-brand dark:text-brand-300 font-medium mt-1">{member.role}</p>
								</div>
								<span className="inline-flex items-center text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-300">
									{member.focus}
								</span>
							</div>
							<p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
								{member.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
