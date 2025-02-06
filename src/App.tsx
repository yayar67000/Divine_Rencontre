import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<main>
			{" "}
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default App;
