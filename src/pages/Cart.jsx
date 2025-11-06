import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/currency'

export default function Cart() {
	const { items, total, updateQuantity, removeItem, clearCart } = useCart()
	
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
							<ShoppingCart className="size-10 text-brand" />
						</div>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
							Your Shopping Cart
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Review your fresh dairy selections
						</p>
					</div>
				</div>
			</section>

			{/* Cart content */}
			<section className="container py-12">
				{items.length === 0 ? (
					<div className="text-center py-16">
						<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
							<ShoppingCart className="size-12 text-gray-400 dark:text-gray-600" />
						</div>
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Your cart is empty</h2>
						<p className="text-gray-600 dark:text-gray-400 mb-6">Start adding fresh dairy products to your cart!</p>
						<Link 
							to="/products"
							className="inline-flex items-center gap-2 rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-6 py-3 font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
						>
							Browse Products
							<ArrowRight className="size-5" />
						</Link>
					</div>
				) : (
					<div className="grid lg:grid-cols-3 gap-8">
						{/* Cart items */}
						<div className="lg:col-span-2 space-y-4">
							{items.map(item => (
								<div key={item.id} className="group flex gap-4 p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-brand dark:hover:border-brand-300 transition-all duration-300">
									<img src={item.image} alt={item.name} className="size-28 rounded-lg object-cover flex-shrink-0" />
									<div className="flex-1 min-w-0">
										<h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">{item.name}</h3>
										<div className="text-lg font-medium text-brand dark:text-brand-300 mb-3">{formatPrice(item.price)}</div>
										<div className="flex items-center gap-4">
											<div className="flex items-center gap-2">
												<label className="text-sm font-medium text-gray-700 dark:text-gray-300">Quantity:</label>
												<div className="flex items-center gap-1">
													<button
														onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
														className="p-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all cursor-pointer"
													>
														<Minus className="size-4" />
													</button>
													<input 
														type="number" 
														min={1} 
														value={item.quantity} 
														onChange={e => updateQuantity(item.id, Math.max(1, Number(e.target.value)))} 
														className="w-16 text-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300" 
													/>
													<button
														onClick={() => updateQuantity(item.id, item.quantity + 1)}
														className="p-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all cursor-pointer"
													>
														<Plus className="size-4" />
													</button>
												</div>
											</div>
											<div className="text-sm text-gray-600 dark:text-gray-400">
												Subtotal: <span className="font-semibold text-gray-900 dark:text-gray-100">{formatPrice(item.price * item.quantity)}</span>
											</div>
										</div>
										<button 
											className="mt-3 inline-flex items-center gap-2 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1.5 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" 
											onClick={() => removeItem(item.id)}
										>
											<Trash2 className="size-4" />
											Remove
										</button>
									</div>
								</div>
							))}
						</div>

						{/* Order summary */}
						<div className="lg:sticky lg:top-24 h-fit">
							<div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-lg">
								<h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Order Summary</h2>
								<div className="space-y-4 mb-6">
									<div className="flex justify-between text-gray-600 dark:text-gray-400">
										<span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
										<span className="font-medium">{formatPrice(total)}</span>
									</div>
									<div className="flex justify-between text-gray-600 dark:text-gray-400">
										<span>Delivery</span>
										<span className="font-medium">{total >= 2000 ? 'Free' : formatPrice(50)}</span>
									</div>
									<div className="border-t border-gray-200 dark:border-gray-800 pt-4">
										<div className="flex justify-between text-lg font-bold text-gray-900 dark:text-gray-100">
											<span>Total</span>
											<span>{formatPrice(total + (total >= 2000 ? 0 : 50))}</span>
										</div>
									</div>
								</div>
								<button 
									className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-5 py-3 font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900 mb-3"
								>
									Proceed to Checkout
									<ArrowRight className="size-5" />
								</button>
								<button 
									className="w-full text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900" 
									onClick={clearCart}
								>
									Clear cart
								</button>
							</div>
						</div>
					</div>
				)}
			</section>
		</div>
	)
}
