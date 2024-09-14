import React, { useEffect, useState } from "react";
import { selectUser } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { BtnLogOut } from "./UserMenu.styled";
import { closeMobMenu } from "../../redux/mob-menu/mobMenuSlice";
import { openApproveModal } from "../../redux/modal/modalSlice";
import { useLocation } from "react-router-dom";

export const UserMenu = ({ burger }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const location = useLocation();

  const [isHome, setIsHome] = useState(false);

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

  const logoutHandler = () => {
    dispatch(closeMobMenu());
    dispatch(openApproveModal());
  };

  return (
    <>
      {user ? (
        <BtnLogOut $isBurger={burger} $isHome={isHome} onClick={logoutHandler}>
          Log out
        </BtnLogOut>
      ) : null}
    </>
  );
};
