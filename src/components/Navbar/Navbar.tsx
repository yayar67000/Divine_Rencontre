import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNumberMessageContext } from "../../context/NumberMessageContext";

export default function Navbar() {
	const { numberMessage } = useNumberMessageContext();

	return (
		<>
			<div className="container">
				<Link to="/">
					<h1 className="title">Divine rencontre</h1>
				</Link>
				<nav>
					{/* css a faire  */}
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
				</nav>
			</div>
		</>
	);
}
