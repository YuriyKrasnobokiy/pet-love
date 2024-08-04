import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ toggleTheme, currentTheme }) => {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Outlet />
      <Footer currentTheme={currentTheme} />
    </>
  );
};

export default Layout;
