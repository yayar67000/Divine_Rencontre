import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
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
		</nav>
	);
}
