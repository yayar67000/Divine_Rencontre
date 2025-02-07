import "./messages.css";
import { Link } from "react-router-dom";
import DataMessages from "../../services/DataMessage";
import { useMatchedGods } from "../../context/MatchContext";

interface MessagesType {
	id: number;
	sender: string;
	message: string;
	timestamp: string;
	image: string;
}

function Messages() {
	const { matchedGods } = useMatchedGods();

	const messages = DataMessages as MessagesType[];

	// Filtrer les messages pour ne montrer que ceux des dieux matchés
	const matchedMessages = messages.filter((message) =>
		matchedGods.some((god) => god.nom === message.sender),
	);

	return (
		<section className="content_messages">
			{/* Affichage des profils des dieux matchés */}
			<div className="content_profils">
				{matchedGods.map((profil) => (
					<Link key={profil.id} to={`/profildetails/${profil.id}`}>
						<img
							className="image_content"
							src={profil.image}
							alt={profil.nom}
						/>
					</Link>
				))}
			</div>

			{/* Affichage des messages */}
			<div className="block_message">
				{matchedMessages.length > 0 ? (
					matchedMessages.map((message) => (
						<Link key={message.id} to={`/messages/${message.id}`}>
							<article>
								<img src={message.image} alt={message.sender} />
								<div className="dateMessage">
									<h3>{message.sender}</h3>
									<p>{message.timestamp}</p>
									<p>{message.message}</p>
								</div>
							</article>
						</Link>
					))
				) : (
					<p>Aucun message pour le moment.</p>
				)}
			</div>
		</section>
	);
}

export default Messages;
