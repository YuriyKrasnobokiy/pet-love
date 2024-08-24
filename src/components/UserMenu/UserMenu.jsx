import React from "react";
import { selectUser } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/auth/authOperations";
import { BtnLogOut } from "./UserMenu.styled";
import { closeMobMenu } from "../../redux/mob-menu/mobMenuSlice";
import { openApproveModal } from "../../redux/modal/modalSlice";

export const UserMenu = ({ burger }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    // dispatch(logout());
    dispatch(closeMobMenu());
    dispatch(openApproveModal());
  };

  return (
    <>
      {user ? (
        <BtnLogOut $isBurger={burger} onClick={logoutHandler}>
          Log out
        </BtnLogOut>
      ) : null}
    </>
  );
};
