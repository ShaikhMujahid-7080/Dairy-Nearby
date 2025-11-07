import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
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
							<Mail className="size-10 text-brand" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							Contact Us
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							We'd love to hear from you! Get in touch with our team
						</p>
					</div>
				</div>
			</section>

			{/* Contact form and info */}
			<section className="container py-16">
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div>
						<h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send us a message</h2>
						<form className="space-y-5">
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
								<input 
									className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-3 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300 transition-all" 
									placeholder="Your name" 
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
								<input 
									type="email" 
									className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-3 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300 transition-all" 
									placeholder="you@example.com" 
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
								<textarea 
									rows={5} 
									className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-3 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300 transition-all resize-none" 
									placeholder="How can we help you?" 
								/>
							</div>
							<button 
								type="submit"
								className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-5 py-3 font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900"
							>
								<Send className="size-5" />
								Send message
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div>
						<h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get in touch</h2>
					<div className="space-y-6">
						<div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand dark:hover:border-brand-300 transition-all">
							<div className="flex items-start gap-4">
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 dark:bg-brand/20">
									<Mail className="size-6 text-brand" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</h3>
									<a href="mailto:maazshaikh2953@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">
										maazshaikh2953@gmail.com
									</a>
								</div>
							</div>
						</div>
						<div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand dark:hover:border-brand-300 transition-all">
							<div className="flex items-start gap-4">
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 dark:bg-brand/20">
									<Phone className="size-6 text-brand" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Phone</h3>
									<a href="tel:+919376964118" className="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-300 transition-colors cursor-pointer">
										+91 93769 64118
									</a>
								</div>
							</div>
						</div>
						<div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand dark:hover:border-brand-300 transition-all">
							<div className="flex items-start gap-4">
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 dark:bg-brand/20">
									<MapPin className="size-6 text-brand" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Address</h3>
									<p className="text-gray-600 dark:text-gray-400">
										Chh. Sambhajinagar-431003<br />
										Maharashtra, India
									</p>
								</div>
							</div>
						</div>
						</div>
						<div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-brand/5 to-brand-300/10 dark:from-brand/10 dark:to-brand-300/20 border border-brand/20 dark:border-brand/30">
							<h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Business Hours</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Monday - Friday: 9:00 AM - 6:00 PM<br />
								Saturday: 10:00 AM - 4:00 PM<br />
								Sunday: Closed
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
