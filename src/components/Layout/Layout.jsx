import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

const Layout = ({ children, toggleTheme, currentTheme }) => {
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
      <main>{children}</main>
      <Footer currentTheme={currentTheme} />
    </>
  );
};

export default Layout;
