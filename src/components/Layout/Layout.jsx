import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { useLocation } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  const location = useLocation();

  return location.pathname === "/login" || location.pathname === "/register" ? (
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
      <Header toggleTheme={toggleTheme} currentTheme={currentTheme}>
        <Login />
        <Registration />
      </Header>
      <main>{children}</main>
      <Footer currentTheme={currentTheme} />
    </>
  ) : (
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
