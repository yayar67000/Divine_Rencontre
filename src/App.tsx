import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { MatchContextProvider } from "./context/MatchContext";

function App() {
	return (
		<>
			<MatchContextProvider>
				<Navbar />
				<main>
					{" "}
					<Outlet />
					<Footer />
				</main>
			</MatchContextProvider>
		</>
	);
}

export default App;
