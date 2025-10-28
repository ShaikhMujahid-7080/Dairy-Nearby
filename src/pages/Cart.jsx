import { useCart } from '../context/CartContext'

export default function Cart() {
	const { items, total, updateQuantity, removeItem, clearCart } = useCart()
	return (
		<section className="container py-12">
			<h1 className="text-3xl font-bold tracking-tight">Your cart</h1>
			{items.length === 0 ? (
				<p className="mt-6 text-gray-600">Your cart is empty.</p>
			) : (
				<div className="mt-6 grid lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-4">
						{items.map(item => (
							<div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
								<img src={item.image} alt={item.name} className="size-24 rounded-lg object-cover" />
								<div className="flex-1">
									<div className="font-medium">{item.name}</div>
									<div className="text-sm text-gray-600">${item.price.toFixed(2)}</div>
									<div className="mt-2 inline-flex items-center gap-2">
										<label className="text-sm">Qty</label>
										<input type="number" min={1} value={item.quantity} onChange={e => updateQuantity(item.id, Number(e.target.value))} className="w-20 rounded-lg border-gray-300" />
										<button className="text-sm text-red-600 hover:underline" onClick={() => removeItem(item.id)}>Remove</button>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="p-6 border border-gray-200 rounded-xl h-fit">
						<div className="text-lg">Subtotal</div>
						<div className="mt-1 text-3xl font-semibold">${total.toFixed(2)}</div>
						<button className="mt-6 w-full inline-flex items-center justify-center rounded-lg bg-brand text-white px-5 py-3 font-medium hover:bg-brand-600">Checkout</button>
						<button className="mt-3 w-full text-sm text-gray-600 hover:underline" onClick={clearCart}>Clear cart</button>
					</div>
				</div>
			)}
		</section>
	)
}
