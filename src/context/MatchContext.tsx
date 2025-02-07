import { useContext, useState, createContext, type ReactNode } from "react";

interface ProfilType {
	id: number;
	nom: string;
	description: string;
	image: string;
	age: number;
	relation: string;
}

interface MatchContextProps {
	matchedGods: ProfilType[];
	setMatchedGods: React.Dispatch<React.SetStateAction<ProfilType[]>>;
	addMatch: (god: ProfilType) => void;
}

const MatchContext = createContext<MatchContextProps | null>(null);

export function MatchContextProvider({ children }: { children: ReactNode }) {
	const [matchedGods, setMatchedGods] = useState([] as ProfilType[]);

	const addMatch = (god: ProfilType) => {
		setMatchedGods((prevMatches) => [...prevMatches, god]);
	};

	return (
		<MatchContext.Provider value={{ matchedGods, setMatchedGods, addMatch }}>
			{children}
		</MatchContext.Provider>
	);
}

export const useMatchedGods = () => {
	const context = useContext(MatchContext);
	if (!context) {
		throw new Error(
			"useMatchedGods doit être utilisé dans un MatchContextProvider",
		);
	}
	return context;
};
