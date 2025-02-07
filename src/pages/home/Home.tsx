import DataProfils from "../../services/DataProfils";
import { useMatchedGods } from "../../context/MatchContext";
import { useNumberMessageContext } from "../../context/NumberMessageContext";
import { Link } from "react-router-dom";
import "./home.css";
import { useState } from "react";

export default function Home() {
	const [currentCard, setCurrentCard] = useState(0);
	const { matchedGods, setMatchedGods } = useMatchedGods();
	const { setNumberMessage } = useNumberMessageContext();
	const matchedNames = matchedGods.map((godMatch) => godMatch.nom);

	const gods = DataProfils.filter((god) => !matchedNames.includes(god.nom));

	const handleClickMatch = () => {
		setNumberMessage((prevNumberMessage) => prevNumberMessage + 1);
		setCurrentCard((prevCard) => (prevCard + 1) % gods.length);
		setMatchedGods((prevMatches) => [...prevMatches, gods[currentCard]]);
	};
	const handleClickNoMatch = () => {
		setCurrentCard((prevCard) => (prevCard + 1) % gods.length);
	};

	console.info(gods);

	if (gods.length === 1) {
		return (
			<div className="noGod-content">
				<p className="no-more-gods">
					Vous avez déjà matché avec tous les dieux disponibles 😏😏
				</p>

				<img className="cupidon" src="./kevinCupidon.png" alt="cupidon" />
				<Link to="/messages">Check tes messages !</Link>
			</div>
		);
	}
	return (
		<>
			<div className="container-accueil">
				<div className="card-accueil">
					<img src={gods[currentCard].image} alt={gods[currentCard].nom} />
					<h2 className="name-accueil">{gods[currentCard].nom}</h2>
					<p className="description-accueil">{gods[currentCard].description}</p>
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
		</>
	);
}
