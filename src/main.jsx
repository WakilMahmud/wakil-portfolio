import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		errorElement: <ErrorPage></ErrorPage>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
