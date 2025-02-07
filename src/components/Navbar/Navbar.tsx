import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Switch from "../Switch/Switch";

export default function Navbar() {
	return (
		<>
			<div className="container">
				<h1 className="title">Divine rencontre</h1>
				<nav>
					{/* css a faire  */}

					<NavLink to="/profil" className="nav-link-lat">
						<img src="/vieil-homme.png" alt="" />
					</NavLink>
					<NavLink to="/" className="nav-link-lat">
						<img src="eclat.png" alt="" />
					</NavLink>
					<NavLink to="/messages" className="nav-link-lat">
						<img src="epitre.png" alt="" />
					</NavLink>
					<div className="switch">
						<Switch />
					</div>
				</nav>
			</div>
		</>
	);
}
