import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)
let transitionTimeoutId = null

export function ThemeProvider({ children }) {
	const getPreferredTheme = () => {
		if (typeof window === 'undefined') return 'light'
		const stored = localStorage.getItem('theme')
		if (stored === 'dark' || stored === 'light') return stored
		const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
		return prefersDark ? 'dark' : 'light'
	}

	const [theme, setTheme] = useState(getPreferredTheme)
	const [hasUserPreference, setHasUserPreference] = useState(() => {
		if (typeof window === 'undefined') return false
		const stored = localStorage.getItem('theme')
		return stored === 'dark' || stored === 'light'
	})

	const applyThemeToDOM = useCallback(nextTheme => {
		if (typeof document === 'undefined') return
		const root = document.documentElement
		const isDark = nextTheme === 'dark'
		root.classList.toggle('dark', isDark)
		root.dataset.mode = nextTheme
		root.style.colorScheme = isDark ? 'dark' : 'light'

		if (typeof window !== 'undefined') {
			root.classList.add('theme-transition')
			window.clearTimeout(transitionTimeoutId)
			transitionTimeoutId = window.setTimeout(() => {
				root.classList.remove('theme-transition')
				transitionTimeoutId = null
			}, 450)
		}
	}, [])

	// Initialize theme on mount and on preference change
	useEffect(() => {
		applyThemeToDOM(theme)
		if (hasUserPreference) {
			localStorage.setItem('theme', theme)
		} else {
			localStorage.removeItem('theme')
		}
	}, [theme, hasUserPreference, applyThemeToDOM])

	// React to system preference only when the user hasn't chosen explicitly
	useEffect(() => {
		if (typeof window === 'undefined') return
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

		const handleChange = event => {
			if (!hasUserPreference) {
				setTheme(event.matches ? 'dark' : 'light')
			}
		}

		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleChange)
			return () => mediaQuery.removeEventListener('change', handleChange)
		}

		mediaQuery.addListener(handleChange)
		return () => mediaQuery.removeListener(handleChange)
	}, [hasUserPreference])

	const toggleTheme = () => {
		setHasUserPreference(true)
		setTheme(prev => {
			const next = prev === 'dark' ? 'light' : 'dark'
			applyThemeToDOM(next)
			return next
		})
	}

	const clearThemePreference = () => {
		setHasUserPreference(false)
		const next = getPreferredTheme()
		applyThemeToDOM(next)
		setTheme(next)
	}

	useEffect(() => {
		return () => {
			if (transitionTimeoutId) {
				clearTimeout(transitionTimeoutId)
				transitionTimeoutId = null
			}
		}
	}, [])

	const value = useMemo(() => ({
		isDark: theme === 'dark',
		theme,
		toggleTheme,
		clearThemePreference,
		hasUserPreference
	}), [theme, hasUserPreference])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
	const ctx = useContext(ThemeContext)
	if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
	return ctx
}

