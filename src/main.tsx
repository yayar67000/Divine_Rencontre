import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Messages from "./pages/messages.tsx";

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
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
