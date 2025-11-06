import FreshCowMilk from '../assets/Fresh-Cow-Milk.png'
import CheddarCheese from '../assets/Cheddar-Cheese.png'
import GreekYogurt from '../assets/Greek-Yogurt.png'
import FarmButter from '../assets/Farm-Butter.png'

export const products = [
	{
		id: 'milk-1',
		name: 'Fresh Cow Milk',
		description: 'Locally sourced, pasteurized whole milk rich in calcium.',
		price: 65.00,
		image: FreshCowMilk,
		category: 'Milk',
	},
	{
		id: 'cheese-1',
		name: 'Cheddar Cheese',
		description: 'Aged cheddar with sharp, savory notes.',
		price: 450.00,
		image: CheddarCheese,
		category: 'Cheese',
	},
	{
		id: 'yogurt-1',
		name: 'Greek Yogurt',
		description: 'Thick and creamy yogurt with live cultures.',
		price: 120.00,
		image: GreekYogurt,
		category: 'Yogurt',
	},
	{
		id: 'butter-1',
		name: 'Farm Butter',
		description: 'Creamy salted butter churned from fresh cream.',
		price: 350.00,
		image: FarmButter,
		category: 'Butter',
	},
]
