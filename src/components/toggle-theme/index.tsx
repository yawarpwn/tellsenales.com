import { useState, useEffect } from 'preact/hooks'
import { Sun, Moon } from '../icons'

export default function ThemeToggle() {
	const [isMounted, setIsMounted] = useState(false)
	const [theme, setTheme] = useState(() => {
		if (import.meta.env.SSR) {
			return undefined
		}

		return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
	})

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const toggleTheme = () => {
		const t = theme === 'light' ? 'dark' : 'light'
		localStorage.setItem('theme', t)
		setTheme(t)
	}

	useEffect(() => {
		const root = document.documentElement
		if (theme === 'light') {
			root.classList.remove('dark')
		} else {
			root.classList.add('dark')
		}
	}, [theme])

	return isMounted ? (
		<button onClick={toggleTheme}>
			{theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
		</button>
	) : (
		<div className="h-6 w-6"></div>
	)
}
