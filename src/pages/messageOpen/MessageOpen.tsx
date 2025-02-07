import "./messageOpen.css";
import DataMessages from "../../services/DataMessage";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";

interface MessageType {
	id: number;
	sender: string;
	message: string;
	image: string;
}

const Dialog = () => {
	const dialog = useRef<HTMLDialogElement>(null);
	console.log(Dialog);

	const openHandler = () => {
		if (dialog.current) dialog.current.showModal();
	};

	const closeHandler = () => {
		if (dialog.current) dialog.current.close();
	};

	return (
		<>
			<dialog ref={dialog}>
				<p>Je suis le dialogue</p>
				<button onClick={closeHandler} type="button">
					Fermer
				</button>
			</dialog>
			<button type="button" onClick={openHandler}>
				Ouvrir le dialogue
			</button>
		</>
	);
};

export default function MessagesOpen() {
	const messages = DataMessages as MessageType[];
	const { id } = useParams();

	// Vérification de l'id
	// biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
	if (!id || isNaN(Number(id))) {
		return <p>Message non trouvé</p>;
	}

	const message = messages.find((message) => message.id === Number(id));

	if (!message) {
		return <p>Message non trouvé</p>;
	}

	// État pour gérer la réponse et afficher les réponses
	const [response, setResponse] = useState("");
	const [responses, setResponses] = useState([] as MessageType[]); // Tableau des réponses

	// Fonction pour gérer le changement dans le champ de réponse
	const handleResponseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setResponse(e.target.value);
	};

	// Fonction pour envoyer la réponse et l'ajouter aux réponses
	const handleSendResponse = () => {
		if (response.trim()) {
			// Créer un objet de message de réponse
			const newResponse: MessageType = {
				id: Date.now(), // Utilisation de l'horodatage pour générer un ID unique
				sender: "Moi", // Exemple : l'utilisateur qui répond
				message: response,
				image: "", // Ajoutez une image si nécessaire
			};

			// Ajouter la réponse au tableau des réponses
			setResponses([...responses, newResponse]);

			// Réinitialiser le champ de texte après l'envoi
			setResponse("");
		} else {
			toast.warn("Veuillez écrire une réponse.", {
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
		}
	};

	return (
		<section className="messageOpen">
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
			<h2>Message de {message.sender} </h2>
			<div className="message-dieu">
				<Link to={`/profildetails/${message.id}`}>
					<img src={message.image} alt="" />
				</Link>

				<p>{message.message}</p>
			</div>

			{/* Afficher les réponses (messages envoyés) sous le message */}
			<div className="reponses">
				{responses.map((response) => (
					<div key={response.id} className="responseMessage">
						<p>{response.sender}</p>
						<p>{response.message}</p>
					</div>
				))}
			</div>

			{/* Formulaire de réponse */}
			<div className="replySection">
				<input
					type="text"
					value={response}
					onChange={handleResponseChange}
					placeholder="Répondez au message..."
				/>
				<button type="button" onClick={handleSendResponse}>
					Répondre
				</button>
			</div>
		</section>
	);
}
