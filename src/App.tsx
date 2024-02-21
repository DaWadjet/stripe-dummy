import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HostedCheckout from "./routes/HostedCheckout.tsx";
import Success from "./routes/Success.tsx";
import Failure from "./routes/Failure.tsx";
import Home from "./Home.tsx";
import IntegratedCheckout from "./routes/IntegratedCheckout.tsx";
import NewSubscription from "./components/NewSubscription.tsx";
import CancelSubscription from "./routes/CancelSubscription.tsx";
import SubscriptionWithTrial from "./routes/SubscriptionWithTrial.tsx";
import ViewInvoices from "./routes/ViewInvoices.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/hosted-checkout",
      element: <HostedCheckout />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/failure",
      element: <Failure />,
    },
    {
      path: "/integrated-checkout",
      element: <IntegratedCheckout />,
    },
    {
      path: "/new-subscription",
      element: <NewSubscription />,
    },
    {
      path: "/cancel-subscription",
      element: <CancelSubscription />,
    },
    {
      path: "/subscription-with-trial",
      element: <SubscriptionWithTrial />,
    },
    {
      path: "/view-invoices",
      element: <ViewInvoices />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
