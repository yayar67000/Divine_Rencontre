import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<main>
				{" "}
				<Outlet />
				<Footer />
			</main>
		</>
	);
}

export default App;
