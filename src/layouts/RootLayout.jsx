import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const scrollPositions = new Map()

export default function RootLayout({ children }) {
	const location = useLocation()
	const navigationType = useNavigationType()
	const rafRef = useRef(null)
	const [scrollProgress, setScrollProgress] = useState(0)
	const [showScrollTop, setShowScrollTop] = useState(false)

	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual'
		}
	}, [])

	useEffect(() => {
		const handleScrollMeta = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			const ratio = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
			setScrollProgress(ratio)
			setShowScrollTop(scrollTop > 400)
		}

		window.addEventListener('scroll', handleScrollMeta, { passive: true })
		handleScrollMeta()
		return () => window.removeEventListener('scroll', handleScrollMeta)
	}, [])

	useLayoutEffect(() => {
		const key = location.key || location.pathname
		const handleScroll = () => {
			scrollPositions.set(key, window.scrollY)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
			scrollPositions.set(key, window.scrollY)
		}
	}, [location.key, location.pathname])

	useLayoutEffect(() => {
		const key = location.key || location.pathname
		const saved = scrollPositions.get(key) ?? 0
		const isPop = navigationType === 'POP'

		if (rafRef.current) {
			cancelAnimationFrame(rafRef.current)
		}

		rafRef.current = requestAnimationFrame(() => {
			window.scrollTo({
				top: isPop ? saved : 0,
				left: 0,
				behavior: isPop ? 'auto' : 'smooth'
			})
		})

		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current)
				rafRef.current = null
			}
		}
	}, [location.key, location.pathname, navigationType])

	return (
		<div className="min-h-dvh flex flex-col">
			<div className="fixed top-0 left-0 right-0 h-1 z-[70] pointer-events-none">
				<div
					className="h-full origin-left bg-brand dark:bg-brand-300"
					style={{ transform: `scaleX(${scrollProgress / 100})`, transition: 'transform 0.2s ease-out' }}
				></div>
			</div>
			<Navbar />
			<main className="flex-1">
				{children}
			</main>
			<Footer />
			{showScrollTop && (
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className="fixed bottom-8 right-6 z-[70] inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand text-white dark:bg-brand-300 dark:text-gray-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all"
					aria-label="Scroll to top"
				>
					<ArrowUp className="size-5" />
				</button>
			)}
		</div>
	)
}
