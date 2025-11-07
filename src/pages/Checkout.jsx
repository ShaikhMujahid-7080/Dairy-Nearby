import { CheckCircle2, Shield, Truck } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/currency'
import { useMemo, useState } from 'react'

export default function Checkout() {
    const { items, total, clearCart } = useCart()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [placing, setPlacing] = useState(false)
    const delivery = total >= 2000 ? 0 : 50
    const tax = Math.round(total * 0.05)
    const grandTotal = total + delivery + tax

    const itemCount = useMemo(() => items.reduce((n, i) => n + i.quantity, 0), [items])

    const placeOrder = async (e) => {
        e.preventDefault()
        setPlacing(true)
        await new Promise(r => setTimeout(r, 1000))
        clearCart()
        setPlacing(false)
        alert('Order placed successfully! A confirmation has been sent to your phone.')
    }

    return (
        <div className="container py-12">
            <div className="grid lg:grid-cols-3 gap-8">
                <form onSubmit={placeOrder} className="lg:col-span-2 p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-sm space-y-5">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Checkout</h1>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full name</label>
                            <input value={name} onChange={e => setName(e.target.value)} required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                            <input value={phone} onChange={e => setPhone(e.target.value)} required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Delivery address</label>
                        <textarea value={address} onChange={e => setAddress(e.target.value)} required rows={4} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-brand focus:border-brand dark:focus:ring-brand-300 dark:focus:border-brand-300" />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center gap-3">
                            <Shield className="size-5 text-brand" /> <span className="text-sm text-gray-600 dark:text-gray-400">Secure checkout</span>
                        </div>
                        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center gap-3">
                            <Truck className="size-5 text-brand" /> <span className="text-sm text-gray-600 dark:text-gray-400">Same-day delivery</span>
                        </div>
                        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center gap-3">
                            <CheckCircle2 className="size-5 text-brand" /> <span className="text-sm text-gray-600 dark:text-gray-400">Quality assured</span>
                        </div>
                    </div>
                    <button type="submit" disabled={placing || items.length === 0} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand dark:bg-brand-300 text-white dark:text-gray-900 px-6 py-3 font-medium hover:bg-brand-600 dark:hover:bg-brand-200 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60">
                        {placing ? 'Placing order…' : 'Place order'}
                    </button>
                </form>

                <div className="h-fit p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Order Summary</h2>
                    <div className="space-y-3 mb-4">
                        {items.map(i => (
                            <div key={i.id} className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                                <span>{i.name} × {i.quantity}</span>
                                <span>{formatPrice(i.price * i.quantity)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                        <div className="flex justify-between"><span>Items ({itemCount})</span><span>{formatPrice(total)}</span></div>
                        <div className="flex justify-between"><span>Delivery</span><span>{delivery === 0 ? 'Free' : formatPrice(delivery)}</span></div>
                        <div className="flex justify-between"><span>Tax (5%)</span><span>{formatPrice(tax)}</span></div>
                        <div className="border-t border-gray-200 dark:border-gray-800 pt-3 flex justify-between text-lg font-bold text-gray-900 dark:text-gray-100"><span>Total</span><span>{formatPrice(grandTotal)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


