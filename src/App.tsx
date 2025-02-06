import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./pages/messages.css";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<main>
			{" "}
			<Navbar />
			<h1> Divine rencontre</h1>
			<Outlet />
			<Footer />
		</main>
	);
}

export default App;
