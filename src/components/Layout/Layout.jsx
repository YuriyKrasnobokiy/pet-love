import {
  BurgerBtn,
  HeaderLogoLink,
  HeaderWrapper,
  ThemeBtn,
} from "./Layout.styled";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpenMobMenu } from "../../redux/mob-menu/mobMenuSelectors";
import { openMobMenu } from "../../redux/mob-menu/mobMenuSlice";
import { MobMenu } from "../MobMenu/MobMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserMenu } from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  const dispatch = useDispatch();
  const isOpenMobMenu = useSelector(selectIsOpenMobMenu);
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
      <header>
        <HeaderWrapper className="container">
          <HeaderLogoLink to="/">
            {currentTheme === "dark" ? (
              <Icon height={20} width={76} name="icon-logo-white-small"></Icon>
            ) : (
              <Icon height={20} width={76} name="icon-logo-small"></Icon>
            )}
          </HeaderLogoLink>
          <ThemeBtn type="button" onClick={toggleTheme}>
            {currentTheme === "dark" ? (
              <MdOutlineNightsStay />
            ) : (
              <MdOutlineWbSunny />
            )}
          </ThemeBtn>
          {isLoggedIn && <UserMenu />}

          <BurgerBtn type="button" onClick={() => dispatch(openMobMenu())}>
            <Icon height={32} width={32} name="icon-burger-menu" />
          </BurgerBtn>
          {isOpenMobMenu && <MobMenu />}
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
