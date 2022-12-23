import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Routes from "./routes";

import GlobalStyle from "./styles/globalStyle";

const App = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
