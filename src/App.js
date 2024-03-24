import * as React from "react";
import * as ReactDOM from "react-dom/client";
import MoneyTransfer from "./pages/MoneyTransfer";
import MoneyTransferConfirmation from "./pages/MoneyTransferConfirmation";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MoneyTransfer />,
    },
    {
      path: "/confirmation",
      element: <MoneyTransferConfirmation />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);