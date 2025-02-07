import "./messageOpen.css";
import DataMessages from "../../services/DataMessage";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface MessageType {
	id: number;
	sender: string;
	message: string;
	timestamp: string;
	image: string;
}

export default function MessagesOpen() {
	const messages = DataMessages as MessageType[];
	const { id } = useParams();
	const message = messages.find((message) => message.id === Number(id));
	if (!message) {
		return <p>Message non trouvé</p>;
	}

	return (
		<section className="messageOpen">
			<h2>Message de {message.sender} </h2>
			<div className="message-dieu">
				<Link key={message.id} to={`/profildetails/${message.id}`}>
					<img src={message.image} alt="" />
				</Link>

				<p>{message.message}</p>
			</div>
		</section>
	);
}
