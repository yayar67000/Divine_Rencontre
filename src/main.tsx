import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Profil from "./Pages/Profil.tsx";
import Home from "./Pages/Home.tsx";
// import Messages from "./Pages/Messages.tsx";


const router = createBrowserRouter([
	{
	  // The root path
	  element: <App />, // Renders the App component for the home page
	  children: [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/profil",
			element: <Profil />,
		  },
		//   {
		// 	path: "/messages",
		// 	element: <Messages />,
		//   },
		]
	  }
	]);
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}
createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
