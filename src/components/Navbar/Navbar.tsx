import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNumberMessageContext } from "../../context/NumberMessageContext";
import Switch from "../Switch/Switch";

export default function Navbar() {
	const { numberMessage } = useNumberMessageContext();

	return (
		<>
			<div className="container">
				<Link to="/">
					<h1 className="title">Divine rencontre</h1>
				</Link>
				<nav>
					<Link to="/profil" className="nav-link-lat">
						<img src="/vieil-homme.png" alt="" />
					</Link>
					<Link to="/home" className="nav-link-lat">
						<img src="eclat.png" alt="" />
					</Link>
					<Link to="/messages" className="nav-link-lat">
						<img src="epitre.png" alt="" />
						<p>{numberMessage}</p>
					</Link>

					<div className="switch">
						<Switch />
					</div>
				</nav>
			</div>
		</>
	);
}
