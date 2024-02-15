import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Result from "./pages/Result/Result";
import Auth from "./pages/Auth/Auth";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/orders/Orders";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function Router() {
  const stripePromise = loadStripe(
    "pk_test_51McqldCc8l9xEds4LgIJ8HREUw626RN9Q2Z3UYW3OhmbllGSP3sNrxUIMNLJY4nBH4122UeWNudnvoDxYBgvjkHH00hKsB4V39"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"you need to be signed in to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must logged in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
