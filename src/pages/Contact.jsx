export default function Contact() {
	return (
		<section className="container py-12">
			<h1 className="text-3xl font-bold tracking-tight">Contact us</h1>
			<form className="mt-6 grid gap-4 max-w-xl">
				<div>
					<label className="text-sm text-gray-600">Name</label>
					<input className="mt-1 w-full rounded-lg border-gray-300" placeholder="Your name" />
				</div>
				<div>
					<label className="text-sm text-gray-600">Email</label>
					<input type="email" className="mt-1 w-full rounded-lg border-gray-300" placeholder="you@example.com" />
				</div>
				<div>
					<label className="text-sm text-gray-600">Message</label>
					<textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300" placeholder="How can we help?" />
				</div>
				<button className="inline-flex items-center justify-center rounded-lg bg-brand text-white px-5 py-3 font-medium hover:bg-brand-600 w-fit">Send message</button>
			</form>
		</section>
	)
}
