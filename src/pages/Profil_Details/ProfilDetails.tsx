import "./ProfilDetails.css";
import DataProfils from "../../services/DataProfils";
import { useParams } from "react-router-dom";
import { useMatchedGods } from "../../context/MatchContext";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProfilType {
	id: number;
	nom: string;
	description: string;
	image: string;
	age: number;
	relation: string;
}

export default function ProfilDetails() {
	const profils = DataProfils as ProfilType[];
	const [dematch, setDematch] = useState(false);

	const { matchedGods, setMatchedGods } = useMatchedGods(); // Utilisation du contexte

	const { id } = useParams();
	const profil = profils.find((projet) => projet.id === Number(id));
	if (!profil) {
		return <p>Profil non trouvé</p>;
	}

	const handleClickDematch = () => {
		setDematch(true);
		alert(`Tu viens de supprimer ${profil.nom} de tes matchs !`);
		setMatchedGods((prevMatches) =>
			prevMatches.filter((god) => god.id !== profil.id),
		);
	};

	return (
		<>
			<section className="detailprofil_content">
				<img className="profil_image" src={profil.image} alt={profil.nom} />
				<h2 className="name">{profil.nom}</h2>
				<div className="text">
					<p>
						<u>Age</u> : {profil.age} ans
					</p>
					<p>
						<u>Description</u> : {profil.description}
					</p>
					<p>
						<u>Recherche</u> : {profil.relation}
					</p>
				</div>
			</section>
			<div className="button-profilDetails">
				<button
					className={dematch ? "button-dematch" : ""}
					type="button"
					onClick={handleClickDematch}
				>
					{" "}
					Dématched ? 🥺{" "}
				</button>

				<Link to="/messages">Retour aux messages ?</Link>
			</div>
		</>
	);
}
