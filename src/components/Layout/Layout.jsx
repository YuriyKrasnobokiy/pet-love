import {
  BurgerBtn,
  HeaderLogoLink,
  HeaderNav,
  HeaderWrapper,
  NavLinkStyled,
  ThemeBtn,
} from "./Layout.styled";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  return (
    <>
      <header>
        <HeaderWrapper>
          <HeaderLogoLink>
            <Icon height={20} width={76} name="icon-logo-small"></Icon>
          </HeaderLogoLink>

          {/* <HeaderNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/news">News</NavLinkStyled>
          </HeaderNav>
          <ThemeBtn type="button" onClick={toggleTheme}>
            {currentTheme === "dark" ? (
              <MdOutlineNightsStay />
            ) : (
              <MdOutlineWbSunny />
            )}
          </ThemeBtn> */}
          <BurgerBtn>
            <Icon height={32} width={32} name="icon-burger-menu" />
          </BurgerBtn>
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
