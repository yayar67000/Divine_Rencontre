import DataProfils from "./DataProfils";

const DataMessages = [
	{
		sender: "Zeus",
		message:
			"Swipe à droite et prépare-toi à une rencontre électrisante ⚡. Bon, je te préviens, j’ai une légère tendance à me transformer en aigle ou en taureau... mais promis, c’est juste un petit détail. 😏",
		timestamp: "2025-02-06T20:30:00Z",
		image: DataProfils.find((profil) => profil.nom === "Zeus")?.image,
	},
	{
		sender: "Aphrodite",
		message:
			"Je suis la déesse de l’amour, donc techniquement, swiper à droite sur moi, c’est un investissement sûr. 💖 Garantie divine incluse !",
		timestamp: "2025-02-06T20:32:00Z",
		image: DataProfils.find((profil) => profil.nom === "Aphrodite")?.image,
	},
	{
		sender: "Hadès",
		message:
			"Promis, si on matche, je te ferai visiter les Enfers sans te laisser coincé·e là-bas... enfin, sauf si tu kiffes les chiens à trois têtes. 🐶🐶🐶",
		timestamp: "2025-02-06T20:35:00Z",
		image: DataProfils.find((profil) => profil.nom === "Hadès")?.image,
	},
	{
		sender: "Athéna",
		message:
			"Salut, j’adore les cerveaux bien remplis ! Par contre, si ton idée de stratégie, c’est 'on verra bien', on va devoir négocier. 😏",
		timestamp: "2025-02-06T20:40:00Z",
		image: DataProfils.find((profil) => profil.nom === "Athéna")?.image,
	},
];

export default DataMessages;
