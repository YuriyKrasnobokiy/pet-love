import {
  HeaderNav,
  HeaderWrapper,
  NavLinkStyled,
  ThemeBtn,
} from "./Layout.styled";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";

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
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
