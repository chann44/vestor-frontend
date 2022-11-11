import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Vesting } from "./pages/Vesting"
import { TokenDetails } from "./componets/Vesting/TokenDetails"
import { VestingDetails } from "./componets/Vesting/VestingDetail"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import { AppContextProvider } from "./context/AppContextProvider";

// chart setup 
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Home } from "./pages/Home";
import { TokenDashboard } from "./pages/TokenDashBoard";
import { TokenListing } from "./componets/TokenDashBoard/Listing";
import { TokenDetailDashBoard } from "./componets/TokenDashBoard/TokenDashBoardDetails";
Chart.register(CategoryScale);


// router setup 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/vesting",
    element: <Vesting />,
    children: [
      {
        path: "",
        element: <TokenDetails />
      }, {
        path: "VestingDetails",
        element: <VestingDetails />
      }
    ]
  },
  {
    path: "/tokendashboard",
    element: <TokenDashboard />,
    children: [
      {
        path: "",
        element: <TokenListing />
      }, {
        path: "tokendetails",
        element: <TokenDetailDashBoard />
      }
    ]
  }
]);

// change max w to a fixed value later 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider >
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="bg-primaryDark text-white">
        <div className="bg-primaryDark min-h-screen max-w-6xl lg:max-w-[80%]  mx-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </AppContextProvider>
  </React.StrictMode>
);
