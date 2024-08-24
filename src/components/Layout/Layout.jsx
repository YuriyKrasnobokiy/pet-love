import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import { Modal } from "../Modal/Modal";
import { PetModal } from "../PetModal/PetModal";
import { selectIsOpenModal } from "../../redux/modal/modalSelectors";
import { selectIsApproveModalOpen } from "../../redux/modal/modalSelectors";
import { useSelector } from "react-redux";
import { ModalApproveAction } from "../ModalApproveAction/ModalApproveAction";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const isApproveModalOpen = useSelector(selectIsApproveModalOpen);
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
      <Header toggleTheme={toggleTheme} currentTheme={currentTheme}>
        <Login />
        <Registration />
      </Header>
      <main>{children}</main>
      {isOpenModal && (
        <Modal>
          {isApproveModalOpen ? <ModalApproveAction /> : <PetModal />}
        </Modal>
      )}
      <Footer currentTheme={currentTheme} />
    </>
  );
};

export default Layout;
