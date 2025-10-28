import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<section className="container py-24 text-center">
			<h1 className="text-6xl font-bold tracking-tight">404</h1>
			<p className="mt-2 text-gray-600">Page not found.</p>
			<Link to="/" className="mt-6 inline-flex items-center rounded-lg bg-brand text-white px-5 py-3 font-medium hover:bg-brand-600">Go home</Link>
		</section>
	)
}
