import React from "react";
import { selectUser } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      {user && <p>Hello {user.email} !</p>}
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};
