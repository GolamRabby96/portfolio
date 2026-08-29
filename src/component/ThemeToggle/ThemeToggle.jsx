import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', 'dark');
	}, []);

	const toggleTheme = () => {
		if (isDark) {
			document.documentElement.setAttribute('data-theme', 'light');
			setIsDark(false);
		} else {
			document.documentElement.setAttribute('data-theme', 'dark');
			setIsDark(true);
		}
	};

	return (
		<button
			className="theme-toggle-btn"
			onClick={toggleTheme}
			aria-label="Toggle theme"
		>
			<FontAwesomeIcon icon={isDark ? faSun : faMoon} />
		</button>
	);
};

export default ThemeToggle;
