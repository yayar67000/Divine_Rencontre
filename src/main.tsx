import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Messages from "./pages/messages.tsx";
import Profil from "./pages/profil/Profil.tsx";

// Router creation
const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				// element: < />, Mettre la page home
			},
			{
				path: "/messages",
				element: <Messages />,
			},
			{
				path: "/profil",
				element: <Profil />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
