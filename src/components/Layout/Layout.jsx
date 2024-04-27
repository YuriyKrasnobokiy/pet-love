import {
  HeaderNav,
  HeaderWrapper,
  NavLinkStyled,
  ThemeBtn,
} from "./Layout.styled";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  return (
    <>
      <header>
        {true && <Loader />}

        <HeaderWrapper>
          <HeaderNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/news">News</NavLinkStyled>
          </HeaderNav>
          <ThemeBtn type="button" onClick={toggleTheme}>
            {currentTheme === "dark" ? (
              <MdOutlineNightsStay />
            ) : (
              <MdOutlineWbSunny />
            )}
          </ThemeBtn>
          <button>
            <Icon size="24" name="icon-burger-menu" />
          </button>
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
