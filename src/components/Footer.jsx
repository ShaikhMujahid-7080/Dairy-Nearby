export default function Footer() {
	return (
		<footer className="border-t border-gray-100 mt-16">
			<div className="container py-8 grid gap-6 md:grid-cols-3 text-sm text-gray-600">
				<div>
					<div className="font-semibold text-gray-900">Dairy Nearby</div>
					<p className="mt-2">Fresh dairy products delivered from local farms to your doorstep.</p>
				</div>
				<div>
					<div className="font-semibold text-gray-900">Company</div>
					<ul className="mt-2 space-y-1">
						<li><a href="/about" className="hover:text-gray-900">About</a></li>
						<li><a href="/careers" className="hover:text-gray-900">Careers</a></li>
						<li><a href="/sustainability" className="hover:text-gray-900">Sustainability</a></li>
					</ul>
				</div>
				<div>
					<div className="font-semibold text-gray-900">Help</div>
					<ul className="mt-2 space-y-1">
						<li><a href="/delivery" className="hover:text-gray-900">Delivery</a></li>
						<li><a href="/faq" className="hover:text-gray-900">FAQ</a></li>
						<li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
					</ul>
				</div>
			</div>
			<div className="py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Dairy Nearby. All rights reserved.</div>
		</footer>
	)
}
