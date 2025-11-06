import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<section className="container py-24 text-center">
			<h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">404</h1>
			<p className="mt-2 text-gray-600 dark:text-gray-400">Page not found.</p>
			<Link 
				to="/" 
				className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-5 py-3 font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900"
			>
				Go home
			</Link>
		</section>
	)
}
