import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkMode.tsx";
import "./index.css";
import Accueil from "./Pages/accueil/Accueil.tsx";
import App from "./App.tsx";

import Profil from "./Pages/profil/Profil.tsx";
import Home from "./Pages/home/Home.tsx";
import Messages from "./Pages/messages/messages.tsx";
import MessagesOpen from "./Pages/messageOpen/MessageOpen.tsx";
import ProfilDetails from "./Pages/Profil_Details/ProfilDetails.tsx";

// import { match } from "./services/match.ts";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/messages",
				element: <Messages />,
			},
			{
				path: "/messages/:id",
				element: <MessagesOpen />,
			},
			{
				path: "/profil",
				element: <Profil />,
			},
			{
				path: "/profildetails/:id",
				element: <ProfilDetails />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}
createRoot(rootElement).render(
	<DarkModeProvider>
		<RouterProvider router={router} />
	</DarkModeProvider>,
);
