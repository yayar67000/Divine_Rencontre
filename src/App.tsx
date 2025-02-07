import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { MatchContextProvider } from "./context/MatchContext";

function App() {
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
