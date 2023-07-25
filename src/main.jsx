import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./routes/Components/Home";
import Articles from "./routes/Components/Articles";

import A1 from "./routes/Components/Articles/A1";
import A2 from "./routes/Components/Articles/A2";
import A3 from "./routes/Components/Articles/A3";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "articles/article1",
        element: <A1 />,
      },
      {
        path: "articles/article2",
        element: <A2 />,
      },
      {
        path: "articles/article3",
        element: <A3 />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);