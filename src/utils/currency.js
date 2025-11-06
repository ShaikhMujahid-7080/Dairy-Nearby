/**
 * Format price in Indian Rupees (INR)
 * @param {number} price - The price to format
 * @returns {string} Formatted price with ₹ symbol
 */
export function formatPrice(price) {
	return `₹${price.toFixed(2)}`
}

