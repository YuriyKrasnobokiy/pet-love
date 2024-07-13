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
  HeaderWrapper,
  StyledHeader,
  ThemeBtn,
  UserBtn,
} from "./Header.styled";
import { useLocation } from "react-router-dom";

export const Header = ({ toggleTheme, currentTheme }) => {
  const dispatch = useDispatch();
  const isOpenMobMenu = useSelector(selectIsOpenMobMenu);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

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

  return (
    <StyledHeader $isHome={isHome}>
      <HeaderWrapper $isHome={isHome}>
        <HeaderLogoLink $isHome={isHome} to="/home">
          {isHome ? (
            <Icon height={20} width={76} name="icon-logo-white-small" />
          ) : currentTheme === "dark" ? (
            <Icon height={20} width={76} name="icon-logo-white-small" />
          ) : (
            <Icon height={20} width={76} name="icon-logo-small" />
          )}
        </HeaderLogoLink>

        <ThemeBtn type="button" $isHome={isHome} onClick={toggleTheme}>
          {currentTheme === "dark" ? (
            <MdOutlineNightsStay />
          ) : (
            <MdOutlineWbSunny />
          )}
        </ThemeBtn>

        <div style={{ display: "flex" }}>
          {isLoggedIn && (
            <UserBtn>
              <Icon height={20} width={20} name="icon-user" />
            </UserBtn>
          )}

          <BurgerBtn
            type="button"
            $isHome={isHome}
            onClick={() => dispatch(openMobMenu())}
          >
            <Icon height={32} width={32} name="icon-burger-menu" />
          </BurgerBtn>
        </div>

        {isOpenMobMenu && <MobMenu />}
      </HeaderWrapper>
    </StyledHeader>
  );
};
