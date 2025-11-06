import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import App from './App.jsx'

const basename = import.meta.env.PROD ? '/Dairy-Nearby' : '/'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter basename={basename}>
			<ThemeProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
)
