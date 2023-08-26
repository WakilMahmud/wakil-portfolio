import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import ErrorPage from "./Components/ErrorPage";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="max-w-7xl m-auto">
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</div>
);
