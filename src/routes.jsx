import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

const RoutesMain = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;