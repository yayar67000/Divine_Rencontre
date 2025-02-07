import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNumberMessageContext } from "../../context/NumberMessageContext";

export default function Navbar() {
	const { numberMessage } = useNumberMessageContext();

	return (
		<>
			<div className="container">
				<NavLink to="/">
					<h1 className="title">Divine rencontre</h1>
				</NavLink>
				<nav>
					{/* css a faire  */}
					<NavLink to="/profil" className="nav-link-lat">
						<img src="/vieil-homme.png" alt="" />
					</NavLink>
					<NavLink to="/home" className="nav-link-lat">
						<img src="eclat.png" alt="" />
					</NavLink>
					<NavLink to="/messages" className="nav-link-lat">
						<img src="epitre.png" alt="" />
						<p>{numberMessage}</p>
					</NavLink>
				</nav>
			</div>
		</>
	);
}
