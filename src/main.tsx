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
Chart.register(CategoryScale);


// router setup 
const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
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
  }
]);

// change max w to a fixed value later 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
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
