import { Package, MapPin, Clock, CheckCircle2, Truck, Search } from 'lucide-react'
import { useState } from 'react'

export default function TrackOrder() {
	const [orderId, setOrderId] = useState('')
	const [trackingData, setTrackingData] = useState(null)

	// Mock tracking data - in real app, this would come from API
	const handleTrack = (e) => {
		e.preventDefault()
		if (orderId.trim()) {
			setTrackingData({
				orderId: orderId,
				status: 'in-transit',
				estimatedDelivery: '2024-01-15 10:00 AM',
				location: 'Out for delivery',
				steps: [
					{ status: 'completed', label: 'Order Placed', time: '2024-01-14 08:00 AM' },
					{ status: 'completed', label: 'Processing', time: '2024-01-14 09:30 AM' },
					{ status: 'completed', label: 'Picked from Farm', time: '2024-01-14 11:00 AM' },
					{ status: 'active', label: 'Out for Delivery', time: '2024-01-15 08:00 AM' },
					{ status: 'pending', label: 'Delivered', time: 'Estimated: 10:00 AM' },
				]
			})
		}
	}

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
							<Package className="size-10 text-brand" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							Track Your Order
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Monitor your fresh dairy delivery in real-time
						</p>
					</div>
				</div>
			</section>

			{/* Track order form */}
			<section className="container py-12">
				<div className="max-w-2xl mx-auto">
					<div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg">
						<form onSubmit={handleTrack} className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Order ID or Tracking Number
								</label>
								<div className="flex gap-2">
									<input 
										type="text" 
										value={orderId}
										onChange={(e) => setOrderId(e.target.value)}
										className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-3 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300 transition-all" 
										placeholder="Enter your order ID" 
									/>
									<button 
										type="submit"
										className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-6 py-3 font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900"
									>
										<Search className="size-5" />
										Track
									</button>
								</div>
							</div>
						</form>
					</div>

					{/* Tracking results */}
					{trackingData && (
						<div className="mt-8 space-y-6">
							{/* Order status card */}
							<div className="p-6 rounded-xl bg-gradient-to-br from-brand/5 to-brand-300/10 dark:from-brand/10 dark:to-brand-300/20 border border-brand/20 dark:border-brand/30">
								<div className="flex items-center justify-between mb-4">
									<div>
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Order ID</div>
										<div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{trackingData.orderId}</div>
									</div>
									<div className="text-right">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Status</div>
										<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 dark:bg-brand/30 text-brand dark:text-brand-300 font-medium text-sm">
											<Truck className="size-4" />
											{trackingData.location}
										</div>
									</div>
								</div>
								<div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
									<Clock className="size-4" />
									<span>Estimated delivery: {trackingData.estimatedDelivery}</span>
								</div>
							</div>

							{/* Tracking timeline */}
							<div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">Delivery Timeline</h3>
								<div className="space-y-4">
									{trackingData.steps.map((step, index) => (
										<div key={index} className="flex gap-4">
											<div className="flex flex-col items-center">
												<div className={`w-10 h-10 rounded-full flex items-center justify-center ${
													step.status === 'completed' 
														? 'bg-green-500 text-white' 
														: step.status === 'active'
														? 'bg-brand text-white ring-4 ring-brand/20 dark:ring-brand-300/20'
														: 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
												}`}>
													{step.status === 'completed' ? (
														<CheckCircle2 className="size-5" />
													) : step.status === 'active' ? (
														<Truck className="size-5" />
													) : (
														<Clock className="size-5" />
													)}
												</div>
												{index < trackingData.steps.length - 1 && (
													<div className={`w-0.5 h-12 ${
														step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
													}`}></div>
												)}
											</div>
											<div className="flex-1 pb-8 last:pb-0">
												<div className={`font-medium mb-1 ${
													step.status === 'completed' 
														? 'text-gray-900 dark:text-gray-100' 
														: step.status === 'active'
														? 'text-brand dark:text-brand-300'
														: 'text-gray-500 dark:text-gray-500'
												}`}>
													{step.label}
												</div>
												<div className="text-sm text-gray-600 dark:text-gray-400">{step.time}</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</div>
	)
}

