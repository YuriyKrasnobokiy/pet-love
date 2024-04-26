import {
  HeaderNav,
  HeaderWrapper,
  NavLinkStyled,
  ThemeBtn,
} from "./Layout.styled";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import Icon from "../Icon/Icon";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  return (
    <>
      <header>
        <HeaderWrapper>
          <HeaderNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/products">Products</NavLinkStyled>
          </HeaderNav>
          <ThemeBtn type="button" onClick={toggleTheme}>
            {currentTheme === "dark" ? (
              <MdOutlineNightsStay />
            ) : (
              <MdOutlineWbSunny />
            )}
          </ThemeBtn>
          <div>
            <Icon size="24" name="icon-star" />
          </div>
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
