import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window === 'undefined') return false
		
		// Check localStorage first
		const stored = localStorage.getItem('theme')
		if (stored === 'dark') return true
		if (stored === 'light') return false
		
		// If no explicit preference, default to light mode
		return false
	})

	// Initialize theme on mount
	useEffect(() => {
		const root = document.documentElement
		// Remove any existing dark class first
		root.classList.remove('dark')
		
		// Then apply the correct theme
		if (isDark) {
			root.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			root.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	const toggleTheme = () => {
		setIsDark(prev => {
			const newValue = !prev
			const root = document.documentElement
			
			// Force remove dark class first, then add if needed
			root.classList.remove('dark')
			
			// Immediately update DOM
			if (newValue) {
				root.classList.add('dark')
				localStorage.setItem('theme', 'dark')
			} else {
				// Ensure it's removed
				root.classList.remove('dark')
				localStorage.setItem('theme', 'light')
			}
			
			return newValue
		})
	}

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const ctx = useContext(ThemeContext)
	if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
	return ctx
}

