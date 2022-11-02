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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="bg-primaryDark text-white">
        <div className="bg-primaryDark min-h-screen max-w-6xl lg:max-w-8xl  mx-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </AppContextProvider>
  </React.StrictMode>
);
