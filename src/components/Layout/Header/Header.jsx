import { useEffect, useState } from "react";
import { MdOutlineNightsStay, MdOutlineWbSunny } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { selectIsLoggedIn } from "../../../redux/auth/authSelectors";
import { selectIsOpenMobMenu } from "../../../redux/mob-menu/mobMenuSelectors";
import { openMobMenu } from "../../../redux/mob-menu/mobMenuSlice";
import { AuthNav } from "../../Auth/AuthNav/AuthNav";
import Icon from "../../Icon/Icon";
import { MobMenu } from "../../MobMenu/MobMenu";
import { UserMenu } from "../../UserMenu/UserMenu";
import { Logo } from "../Logo/Logo";
import {
  BurgerBtn,
  HeaderWrapper,
  StyledHeader,
  ThemeBtn,
  UserBtn,
} from "./Header.styled";
import { HeaderNavComponent } from "./HeaderNav/HeaderNav";

export const Header = ({ toggleTheme, currentTheme }) => {
  const dispatch = useDispatch();
  const isOpenMobMenu = useSelector(selectIsOpenMobMenu);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  const deviceType = useDeviceType();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setIsHome(true);
        break;

      default:
        setIsHome(false);
        break;
    }
  }, [location.pathname]);

  return (
    <StyledHeader $isHome={isHome}>
      <HeaderWrapper $isHome={isHome}>
        <Logo isHome={isHome} currentTheme={currentTheme} />
        <HeaderNavComponent isHome={isHome} />
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
              {deviceType !== "mobile" && <UserMenu />}
              <UserBtn>
                <Icon height={20} width={20} name="icon-user" />
              </UserBtn>
            </>
          ) : deviceType === "tablet" || deviceType === "desktop" ? (
            <AuthNav />
          ) : null}

          <BurgerBtn
            type="button"
            $isHome={isHome}
            onClick={() => dispatch(openMobMenu())}
          >
            {deviceType === "tablet" || deviceType === "desktop" ? (
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
