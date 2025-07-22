import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import { Modal } from "../Modal/Modal";
import { PetModal } from "../PetModal/PetModal";
import {
  selectIsModalEditUserOpen,
  selectIsOpenModal,
} from "../../redux/modal/modalSelectors";
import { selectIsApproveModalOpen } from "../../redux/modal/modalSelectors";
import { useSelector } from "react-redux";
import { ModalApproveAction } from "../ModalApproveAction/ModalApproveAction";
import { ModalEditUser } from "../ModalEditUser/ModalEditUser";
import { LayoutStyled } from "./Layout.styled";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const isApproveModalOpen = useSelector(selectIsApproveModalOpen);
  const isModalEditUserOpen = useSelector(selectIsModalEditUserOpen);
  return (
    <LayoutStyled>
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
      <main style={{flex: 1}}>{children}</main>
      {isOpenModal && (
        <Modal>
          {isModalEditUserOpen ? (
            <ModalEditUser />
          ) : isApproveModalOpen ? (
            <ModalApproveAction />
          ) : (
            <PetModal />
          )}
        </Modal>
      )}
      <Footer currentTheme={currentTheme} />
    </LayoutStyled>
  );
};

export default Layout;
