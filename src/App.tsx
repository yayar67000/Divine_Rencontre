import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { MatchContextProvider } from "./context/MatchContext";

import { NumberMessageContextProvider } from "./context/NumberMessageContext";

function App() {
	return (
		<>
			<NumberMessageContextProvider>
				<MatchContextProvider>
					<Navbar />
					<main>
						{" "}
						<Outlet />
					</main>
					<Footer />
				</MatchContextProvider>
			</NumberMessageContextProvider>
		</>
	);
}

export default App;
