// Todo: Create & manage context in this file
import { useState, createContext } from 'react';

export const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
	// Todo: Add the component code (incl. dynamic context value)

	const [theme, setTheme] = useState('light');

	const handleToggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	const themeVals = {
		theme: theme,
		toggleTheme: handleToggleTheme,
	};

	return (
		<ThemeContext.Provider value={themeVals}>{children}</ThemeContext.Provider>
	);
}
