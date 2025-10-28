export default function Careers() {
	const roles = [
		{ title: 'Operations Associate', location: 'On-site', type: 'Full-time' },
		{ title: 'Customer Support Specialist', location: 'Remote', type: 'Full-time' },
		{ title: 'Frontend Engineer', location: 'Hybrid', type: 'Contract' },
	]
	return (
		<section className="container py-12">
			<h1 className="text-3xl font-bold tracking-tight">Careers</h1>
			<p className="mt-2 text-gray-600 max-w-prose">Join our growing team bringing fresh dairy to our community.</p>
			<div className="mt-8 space-y-4">
				{roles.map((r, idx) => (
					<div key={idx} className="rounded-xl border border-gray-200 p-5 bg-white">
						<div className="font-medium">{r.title}</div>
						<div className="text-sm text-gray-600">{r.location} • {r.type}</div>
						<button className="mt-3 rounded-lg bg-brand text-white px-4 py-2 text-sm hover:bg-brand-600">Apply</button>
					</div>
				))}
			</div>
		</section>
	)
}
