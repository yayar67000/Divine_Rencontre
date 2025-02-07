import DataProfils from "../../services/DataProfils";
import { Link } from "react-router-dom";
import { useMatchedGods } from "../../context/MatchContext";

import "./home.css";
import { useState } from "react";

export default function Home() {
	const gods = DataProfils;
	const [currentCard, setCurrentCard] = useState(0);
	const { matchedGods, setMatchedGods } = useMatchedGods(); // Utilisation du contexte

	const handleClickMatch = () => {
		setCurrentCard((prevCard) => (prevCard + 1) % gods.length);
		setMatchedGods((prevMatches) => [...prevMatches, gods[currentCard]]);
	};
	const handleClickNoMatch = () => {
		setCurrentCard((prevCard) => (prevCard + 1) % gods.length);
	};

	console.info(matchedGods);

	return (
		<>
			<div className="container-accueil">
				<div className="card-accueil">
					<img src={gods[currentCard].image} alt={gods[currentCard].nom} />
					<h2 className="name-accueil">{gods[currentCard].nom}</h2>
					<div className="description-accueil">
						<p>{gods[currentCard].description}</p>
					</div>
				</div>
			</div>
			<div className="container-boutons">
				{/* Ajout du bouton de la pomme pour passer au dieu suivant */}
				<button
					className="button-left"
					type="button"
					onClick={handleClickNoMatch}
				>
					<img src="./pourri.svg" alt="pomme" />
				</button>
				<button
					className="button-right"
					type="button"
					onClick={handleClickMatch}
				>
					<img src="./pomme.svg" alt="pomme" />
				</button>
			</div>
			<Link to="/messages">
				<button type="button" className="view-matches-button">
					Voir les matchs ❤️
				</button>
			</Link>
		</>
	);
}
