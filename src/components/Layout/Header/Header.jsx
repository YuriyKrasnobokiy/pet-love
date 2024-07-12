import React from "react";
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
  ThemeBtn,
  UserBtn,
} from "./Header.styled";

export const Header = ({ toggleTheme, currentTheme }) => {
  const dispatch = useDispatch();
  const isOpenMobMenu = useSelector(selectIsOpenMobMenu);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <HeaderWrapper>
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

        {isLoggedIn && (
          <UserBtn>
            <Icon height={20} width={20} name="icon-user" />
          </UserBtn>
        )}

        <BurgerBtn type="button" onClick={() => dispatch(openMobMenu())}>
          <Icon height={32} width={32} name="icon-burger-menu" />
        </BurgerBtn>
        {isOpenMobMenu && <MobMenu />}
      </HeaderWrapper>
    </header>
  );
};
