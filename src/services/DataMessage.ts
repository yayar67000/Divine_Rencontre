import DataProfils from "./DataProfils";

const DataMessages = [
	{
		id: 1,
		sender: "Zeus",
		message:
			"Salut ! Je suis Zeus, roi des dieux. Envie de monter au sommet de l'Olympe avec moi ? ⚡😉",
		timestamp: "2025-02-06T20:30:00Z",
		image: DataProfils.find((profil) => profil.nom === "Zeus")?.image,
	},
	{
		id: 2,
		sender: "Héra",
		message:
			"Coucou ! Je suis Héra. Si tu cherches quelqu'un de loyal et protecteur, ne cherche pas plus loin. 💍😊",
		timestamp: "2025-02-06T20:31:00Z",
		image: DataProfils.find((profil) => profil.nom === "Héra")?.image,
	},
	{
		id: 3,
		sender: "Aphrodite",
		message:
			"Hello beau·belle gosse 😘 ! L'amour, c'est mon domaine. Prêt·e pour une romance divine ? 💖",
		timestamp: "2025-02-06T20:32:00Z",
		image: DataProfils.find((profil) => profil.nom === "Aphrodite")?.image,
	},
	{
		id: 4,
		sender: "Athéna",
		message:
			"Salut ! Athéna ici. J’adore les esprits brillants. Que dirais-tu d'une conversation pleine de sagesse ? 🏛️",
		timestamp: "2025-02-06T20:33:00Z",
		image: DataProfils.find((profil) => profil.nom === "Athéna")?.image,
	},
	{
		id: 5,
		sender: "Poséidon",
		message:
			"Hey ! Poséidon à l'appareil 🌊. Plongée dans l’inconnu avec moi ? Promis, je ne te noierai pas... trop ! 😉",
		timestamp: "2025-02-06T20:34:00Z",
		image: DataProfils.find((profil) => profil.nom === "Poséidon")?.image,
	},
	{
		id: 6,
		sender: "Apollon",
		message:
			"Salut ! Apollon, dieu de la musique et du soleil ☀️. Envie d'un concert privé au clair de lune ? 🎶",
		timestamp: "2025-02-06T20:35:00Z",
		image: DataProfils.find((profil) => profil.nom === "Apollon")?.image,
	},
	{
		id: 7,
		sender: "Artémis",
		message:
			"Hello ! Artémis, déesse de la chasse 🏹. Si tu me poursuis, assure-toi de bien viser 😉.",
		timestamp: "2025-02-06T20:36:00Z",
		image: DataProfils.find((profil) => profil.nom === "Artémis")?.image,
	},
	{
		id: 8,
		sender: "Hadès",
		message:
			"Salut... Hadès ici. Promis, je ne t’emmènerai pas dans les Enfers dès le premier rendez-vous... sauf si tu insistes. 😈",
		timestamp: "2025-02-06T20:37:00Z",
		image: DataProfils.find((profil) => profil.nom === "Hadès")?.image,
	},
	{
		id: 9,
		sender: "Hermès",
		message:
			"Coucou ! Hermès, messager des dieux 📬. J’ai beaucoup voyagé, mais je n’ai jamais trouvé quelqu'un comme toi. On s'envoie des messages ? 📲",
		timestamp: "2025-02-06T20:38:00Z",
		image: DataProfils.find((profil) => profil.nom === "Hermès")?.image,
	},
	{
		id: 10,
		sender: "Déméter",
		message:
			"Bonjour ! Je suis Déméter 🌾. Envie de cultiver quelque chose de spécial ensemble ?",
		timestamp: "2025-02-06T20:39:00Z",
		image: DataProfils.find((profil) => profil.nom === "Déméter")?.image,
	},
	{
		id: 11,
		sender: "Dionysos",
		message:
			"Hey ! Dionysos ici 🍷. Prêt·e à vivre une soirée inoubliable ? Le vin est déjà servi ! 🥂",
		timestamp: "2025-02-06T20:40:00Z",
		image: DataProfils.find((profil) => profil.nom === "Dionysos")?.image,
	},
];

export default DataMessages;
