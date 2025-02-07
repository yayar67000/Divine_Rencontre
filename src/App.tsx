import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { MatchContextProvider } from "./context/MatchContext";
import { useDarkTheme } from "./context/DarkMode";

function App() {
	const { darkMode } = useDarkTheme();

	const root = document.querySelector("#root");

	if (root) {
		root.className = darkMode ? "dark" : "light";
	}
	return (
		<>
			<MatchContextProvider>
				<Navbar />
				<main>
					{" "}
					<Outlet />
				</main>
				<Footer />
			</MatchContextProvider>
		</>
	);
}

export default App;
