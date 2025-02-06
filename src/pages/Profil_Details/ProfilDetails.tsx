import "./ProfilDetails.css";
import DataProfils from "../../services/DataProfils";
import { useParams } from "react-router-dom";

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
	const { id } = useParams();
	const profil = profils.find((projet) => projet.id === Number(id));
	if (!profil) {
		return <p>Profil non trouvé</p>;
	}

	return (
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
	);
}
