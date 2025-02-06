import "./messages.css";
import { Link } from "react-router-dom";
import DataMessages from "../services/DataMessage";
import DataProfils from "../services/DataProfils";

interface MessagesType {
	id: number;
	sender: string;
	message: string;
	timestamp: string;
	image: string;
}

interface ProfilType {
	id: number;
	nom: string;
	description: string;
	image: string;
	age: 3300;
	relation: string;
}

function Messages() {
	const messages = DataMessages as MessagesType[];
	const profils = DataProfils as ProfilType[];

	return (
		<section className="content_messages">
			<div className="content_profils">
				{profils.map((profil) => (
					<Link key={profil.id} to={`/profildetails/${profil.id}`}>
						<img
							className="image_content"
							key={profil.id}
							src={profil.image}
							alt={profil.nom}
						/>
					</Link>
				))}
			</div>
			<div className="block_message">
				{messages.map((message) => (
					<article key={message.sender}>
						<div className="titleMessage">
							<img src={message.image} alt="" />
							<h3> {message.sender}</h3>
						</div>
						<p>{message.timestamp}</p>
						<p>{message.message}</p>
					</article>
				))}
			</div>
		</section>
	);
}

export default Messages;
