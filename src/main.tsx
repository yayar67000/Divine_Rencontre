import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkMode.tsx";
import "./index.css";
import App from "./App.tsx";

import Profil from "./pages/profil/Profil.tsx";
import Home from "./pages/home/Home.tsx";
import Messages from "./pages/messages/messages.tsx";
import MessagesOpen from "./pages/messageOpen/MessageOpen.tsx";
import ProfilDetails from "./pages/Profil_Details/ProfilDetails.tsx";

// import { match } from "./services/match.ts";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
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
