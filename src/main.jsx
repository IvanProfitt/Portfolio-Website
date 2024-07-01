import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./App";
import Resume from "./Resume";

const router = createBrowserRouter ([
    {
    path:"/",
    element: <App />,
    },
    {
    path:"/resume",
    element:<Resume />,
    }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
