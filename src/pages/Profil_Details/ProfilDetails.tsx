import "./ProfilDetails.css";
import DataProfils from "../../services/DataProfils";
import { useParams } from "react-router-dom";

interface ProfilType {
	id: number;
	nom: string;
	description: string;
	image: string;
	age: 3300;
	relation: string;
}

export default function ProfilDetails() {
	const profils = DataProfils as ProfilType[];
	const { id } = useParams();
	const idProfils = profils.find((idProfil) => idProfil.id === Number(id));
	if (!idProfils) {
		return <p>Projet non trouvé</p>;
	}

	return (
		<>
			<h1>Profil Details</h1>
		</>
	);
}
