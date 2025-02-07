import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Créer le context

interface MyContextProps {
	children: ReactNode;
}

interface DarkModeProps {
	darkMode: boolean;
	setDarkMode: (darkTheme: boolean) => void;
}

const DarkModeContext = createContext(null as null | DarkModeProps);

// Créer le provider

export function DarkModeProvider({ children }: MyContextProps) {
	const [darkMode, setDarkMode] = useState(false as boolean);

	return (
		<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

// Créer le hook personnalisé

export const useDarkTheme = () => {
	const context = useContext(DarkModeContext);
	if (context == null) {
		throw new Error("Un context doit être utilisé");
	}

	return context;
};
