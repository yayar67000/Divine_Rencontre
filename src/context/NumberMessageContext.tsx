import { useContext, useState, createContext, type ReactNode } from "react";

interface NumberMessageContextProps {
	numberMessage: number;
	setNumberMessage: React.Dispatch<React.SetStateAction<number>>;
}

const NumberMessageContext = createContext<NumberMessageContextProps | null>(
	null,
);

export function NumberMessageContextProvider({
	children,
}: { children: ReactNode }) {
	const [numberMessage, setNumberMessage] = useState(0 as number);

	return (
		<NumberMessageContext.Provider value={{ numberMessage, setNumberMessage }}>
			{children}
		</NumberMessageContext.Provider>
	);
}

export const useNumberMessageContext = () => {
	const context = useContext(NumberMessageContext);
	if (!context) {
		throw new Error(
			"useNumberMessageContext doit être utilisé dans un NumberMessageContextProvider",
		);
	}
	return context;
};
