import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import initPremiumReveal from './utils/premiumReveal'

const root = createRoot(document.getElementById('root'))
root.render(<App />)

// Initialize reveal animations after mount
if (typeof window !== 'undefined'){
	// slight delay to ensure DOM inserted by React is present
	setTimeout(() => {
		try { initPremiumReveal(); } catch (e) { console.warn('initPremiumReveal failed', e); }
	}, 80);
}
