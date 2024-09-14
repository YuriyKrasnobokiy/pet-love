import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const MyNotices = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={"favorites"}>My favorites pets</NavLink>
          </li>
          <li>
            <NavLink to={"viewed"}>Viewed</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
