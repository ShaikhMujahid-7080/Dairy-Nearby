export default function FAQ() {
	const faqs = [
		{ q: 'Where do you source your dairy?', a: 'We partner with small, vetted local farms.' },
		{ q: 'Do you offer subscriptions?', a: 'Yes, weekly and monthly flexible plans.' },
		{ q: 'What is your delivery area?', a: 'We currently deliver within the city limits and nearby suburbs.' },
	]
	return (
		<section className="container py-12">
			<h1 className="text-3xl font-bold tracking-tight">Frequently asked questions</h1>
			<dl className="mt-8 space-y-6">
				{faqs.map((f, i) => (
					<div key={i} className="rounded-xl border border-gray-200 p-5 bg-white">
						<dt className="font-medium">{f.q}</dt>
						<dd className="mt-2 text-gray-600">{f.a}</dd>
					</div>
				))}
			</dl>
		</section>
	)
}
