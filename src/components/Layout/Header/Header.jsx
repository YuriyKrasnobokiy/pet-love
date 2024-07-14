import { useEffect, useState } from "react";
import { MdOutlineNightsStay, MdOutlineWbSunny } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/authSelectors";
import { selectIsOpenMobMenu } from "../../../redux/mob-menu/mobMenuSelectors";
import { openMobMenu } from "../../../redux/mob-menu/mobMenuSlice";
import Icon from "../../Icon/Icon";
import { MobMenu } from "../../MobMenu/MobMenu";
import {
  BurgerBtn,
  HeaderLogoLink,
  HeaderNav,
  HeaderWrapper,
  StyledHeader,
  ThemeBtn,
  UserBtn,
} from "./Header.styled";
import { useLocation } from "react-router-dom";
import { AuthNav } from "../../Auth/AuthNav/AuthNav";
import { HeaderNavComponent } from "./HeaderNav/HeaderNav";

export const Header = ({ toggleTheme, currentTheme }) => {
  const dispatch = useDispatch();
  const isOpenMobMenu = useSelector(selectIsOpenMobMenu);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setIsHome(true);
        break;

      default:
        setIsHome(false);
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };
    setIsTablet(window.innerWidth >= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledHeader $isHome={isHome}>
      <HeaderWrapper $isHome={isHome}>
        <HeaderLogoLink $isHome={isHome} to="/home">
          {isTablet ? (
            isHome ? (
              <Icon height={28} width={105} name="icon-logo-white-big" />
            ) : currentTheme === "dark" ? (
              <Icon height={28} width={105} name="icon-logo-white-big" />
            ) : (
              <Icon height={28} width={105} name="icon-logo-big" />
            )
          ) : isHome ? (
            <Icon height={20} width={76} name="icon-logo-white-small" />
          ) : currentTheme === "dark" ? (
            <Icon height={20} width={76} name="icon-logo-white-small" />
          ) : (
            <Icon height={20} width={76} name="icon-logo-small" />
          )}
        </HeaderLogoLink>

        <HeaderNavComponent />

        <ThemeBtn type="button" $isHome={isHome} onClick={toggleTheme}>
          {currentTheme === "dark" ? (
            <MdOutlineNightsStay />
          ) : (
            <MdOutlineWbSunny />
          )}
        </ThemeBtn>

        <div style={{ display: "flex" }}>
          {isLoggedIn ? (
            <>
              <UserBtn>
                <Icon height={20} width={20} name="icon-user" />
              </UserBtn>
            </>
          ) : isTablet ? (
            <AuthNav />
          ) : null}

          <BurgerBtn
            type="button"
            $isHome={isHome}
            onClick={() => dispatch(openMobMenu())}
          >
            {isTablet ? (
              <Icon height={36} width={36} name="icon-burger-menu" />
            ) : (
              <Icon height={32} width={32} name="icon-burger-menu" />
            )}
          </BurgerBtn>
        </div>

        {isOpenMobMenu && <MobMenu />}
      </HeaderWrapper>
    </StyledHeader>
  );
};
