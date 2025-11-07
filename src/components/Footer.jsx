import { Link } from 'react-router-dom'
import { Milk, Facebook, Twitter, Instagram, Mail, MapPin, Phone, Leaf, Truck } from 'lucide-react'
import dairynearbyIcon from '../assets/dairynearbyIcon-nobg.png'

export default function Footer() {
	return (
		<footer className="relative mt-20 border-t border-gray-200 dark:border-gray-800 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
			{/* Decorative top border */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-brand via-brand-300 to-brand"></div>
			
			<div className="container py-12">
				{/* Main footer content */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
					{/* Brand section */}
					<div className="lg:col-span-1">
						<Link to="/" className="inline-flex items-center gap-2 mb-4 group">
							<div className="p-2 rounded-xl bg-linear-to-br from-brand/10 to-brand-300/20 dark:from-brand/20 dark:to-brand-300/30 group-hover:from-brand/20 group-hover:to-brand-300/30 dark:group-hover:from-brand/30 dark:group-hover:to-brand-300/40 transition-all duration-300">
								<img 
									src={dairynearbyIcon} 
									alt="Dairy Nearby Logo" 
									className="h-10 w-auto object-contain filter dark:invert dark:brightness-200" 
								/>
							</div>
							<span className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
								Dairy Nearby
							</span>
						</Link>
						<p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
							Fresh dairy products delivered from local farms to your doorstep. Farm-to-door freshness in 8 hours.
						</p>
						
						{/* Social media links */}
					<div className="flex items-center gap-3">
						<a 
								href="https://facebook.com" 
								target="_blank" 
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 hover:border-brand dark:hover:border-brand-300 hover:bg-brand/5 dark:hover:bg-brand/10 transition-all duration-200 cursor-pointer"
								aria-label="Facebook"
							>
								<Facebook className="size-5" />
							</a>
							<a 
								href="https://twitter.com" 
								target="_blank" 
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 hover:border-brand dark:hover:border-brand-300 hover:bg-brand/5 dark:hover:bg-brand/10 transition-all duration-200 cursor-pointer"
								aria-label="Twitter"
							>
								<Twitter className="size-5" />
							</a>
							<a 
								href="https://www.instagram.com/dairynearby_20/" 
								target="_blank" 
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 hover:border-brand dark:hover:border-brand-300 hover:bg-brand/5 dark:hover:bg-brand/10 transition-all duration-200 cursor-pointer"
								aria-label="Instagram"
							>
								<Instagram className="size-5" />
							</a>
						<a 
							href="mailto:maazshaikh2953@gmail.com"
							className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 hover:border-brand dark:hover:border-brand-300 hover:bg-brand/5 dark:hover:bg-brand/10 transition-all duration-200 cursor-pointer"
							aria-label="Email"
						>
							<Mail className="size-5" />
						</a>
					</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
							<Milk className="size-5 text-brand" />
							Quick Links
						</h3>
						<ul className="space-y-3">
							<li>
								<Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-2 group">
									<span className="group-hover:translate-x-1 transition-transform">Products</span>
								</Link>
							</li>
							<li>
								<Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-2 group">
									<span className="group-hover:translate-x-1 transition-transform">About Us</span>
								</Link>
							</li>
							<li>
								<Link to="/delivery" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-2 group">
									<span className="group-hover:translate-x-1 transition-transform">Delivery Info</span>
								</Link>
							</li>
							<li>
								<Link to="/sustainability" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-2 group">
									<span className="group-hover:translate-x-1 transition-transform">Sustainability</span>
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
							<Truck className="size-5 text-brand" />
							Support
						</h3>
						<ul className="space-y-3">
							<li>
								<Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-2 group">
									<span className="group-hover:translate-x-1 transition-transform">FAQ</span>
								</Link>
							</li>
							<li>
								<Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-2 group">
									<span className="group-hover:translate-x-1 transition-transform">Contact Us</span>
								</Link>
							</li>
							<li>
								<Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-2 group">
									<span className="group-hover:translate-x-1 transition-transform">Careers</span>
								</Link>
							</li>
							<li>
								<Link to="/track-order" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer flex items-center gap-2 group">
									<span className="group-hover:translate-x-1 transition-transform">Track Order</span>
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter & Contact */}
					<div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
							<Leaf className="size-5 text-brand" />
							Stay Fresh
						</h3>
						<p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
							Subscribe to get weekly fresh delivery updates and exclusive offers.
						</p>
						<form className="space-y-3">
							<input 
								type="email" 
								placeholder="Enter your email" 
								className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300 transition-all"
							/>
							<button 
								type="submit"
								className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-4 py-2.5 font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900"
							>
								<Mail className="size-4" />
								Subscribe
							</button>
						</form>
						
					{/* Contact Info */}
					<div className="mt-6 space-y-2 pt-6 border-t border-gray-200 dark:border-gray-800">
						<div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
							<MapPin className="size-4 mt-0.5 text-brand shrink-0" />
							<span>Chh. Sambhajinagar-431003, Maharashtra, India</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
							<Phone className="size-4 text-brand shrink-0" />
							<a href="tel:+919376964118" className="hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">
								+91 93769 64118
							</a>
						</div>
					</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 border-t border-gray-200 dark:border-gray-800">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="text-sm text-gray-500 dark:text-gray-500">
							© {new Date().getFullYear()} Dairy Nearby. All rights reserved.
						</div>
						<div className="flex items-center gap-6 text-sm">
							<a href="#" className="text-gray-500 dark:text-gray-500 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">
								Privacy Policy
							</a>
							<a href="#" className="text-gray-500 dark:text-gray-500 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">
								Terms of Service
							</a>
							<a href="#" className="text-gray-500 dark:text-gray-500 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
