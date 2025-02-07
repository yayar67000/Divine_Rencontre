import "./ProfilDetails.css";
import DataProfils from "../../services/DataProfils";
import { useParams } from "react-router-dom";
import { useMatchedGods } from "../../context/MatchContext";
import { useNumberMessageContext } from "../../context/NumberMessageContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";

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

	const { setMatchedGods } = useMatchedGods(); // Utilisation du contexte
	const { setNumberMessage } = useNumberMessageContext();
	const { id } = useParams();
	const profil = profils.find((projet) => projet.id === Number(id));
	if (!profil) {
		return <p>Profil non trouvé</p>;
	}

	const handleClickDematch = () => {
		setDematch(true);
		toast.warn(`Tu viens de supprimer ${profil.nom} de tes matchs !`, {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Flip,
		});
		setNumberMessage((prevNumberMessage) => prevNumberMessage - 1);
		setMatchedGods((prevMatches) =>
			prevMatches.filter((god) => god.id !== profil.id),
		);
	};
	`Tu viens de supprimer ${profil.nom} de tes matchs !`;
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition={Flip}
			/>
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
