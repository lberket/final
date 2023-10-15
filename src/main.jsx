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
import ClientPortal from "./routes/Components/ClientPortal";
import AboutUs from "./routes/Components/AboutUs";
import ContactUs from "./routes/Components/ContactUs";
import Services from "./routes/Components/Services";
import SuccessStories from "./routes/Components/SuccessStories";
import WhySleepMatters from "./routes/Components/WhySleepMatters";

import A1 from "./routes/Components/Articles/A1";
import A2 from "./routes/Components/Articles/A2";
import A3 from "./routes/Components/Articles/A3";
import A4 from "./routes/Components/Articles/A4";
import A5 from "./routes/Components/Articles/A5";
import A6 from "./routes/Components/Articles/A6";
import A7 from "./routes/Components/Articles/A7";
import A8 from "./routes/Components/Articles/A8";

const articleComponents = [A1, A2, A3, A4, A5, A6, A7, A8];

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
        path: "articles",
        element: <Articles />,
      },
      {
        path: "clientportal",
        element: <ClientPortal />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "whysleepmatters",
        element: <WhySleepMatters />,
      },
      {
        path: "services",
        element: <Services />,
      },

      ...articleComponents.map((ArticleComponent, index) => ({
        path: `articles/article${index + 1}`,
        element: <ArticleComponent />,
      })),
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);