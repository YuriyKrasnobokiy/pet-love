import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { closeMobMenu } from "../../redux/mob-menu/mobMenuSlice";
import { AuthNav } from "../Auth/AuthNav/AuthNav";
import Icon from "../Icon/Icon";
import { UserMenu } from "../UserMenu/UserMenu";
import {
  CloseBtn,
  MobMenuOverlay,
  MobMenuStyled,
  MobNavLink,
  MobNavWrap,
} from "./MobMenu.styled";

export const MobMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [changeColor, setChangeColor] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isScrollable, setIsScrollable] = useState(false);
  const contentRef = useRef(null);

  // useEffect(() => {
  //   const checkScrollable = () => {
  //     if (contentRef.current) {
  //       const isContentOverflowing =
  //         contentRef.current.scrollHeight > window.innerHeight;
  //       setIsScrollable(isContentOverflowing);
  //     }
  //   };

  //   checkScrollable();
  //   window.addEventListener("resize", checkScrollable);

  //   return () => {
  //     window.removeEventListener("resize", checkScrollable);
  //   };
  // }, []);

  // useEffect(() => {
  //   switch (location.pathname) {
  //     case "/login":
  //       setChangeColor(true);
  //       break;
  //     case "/register":
  //       setChangeColor(true);
  //       break;
  //     default:
  //       setChangeColor(false);
  //       break;
  //   }
  // }, [location.pathname]);

  // useEffect(() => {
  //   const handleKeyDown = (evt) => {
  //     if (evt.code === "Escape") {
  //       dispatch(closeMobMenu());
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //     document.body.style.overflow = "auto";
  //   };
  // }, [dispatch]);

  useEffect(() => {
    const checkScrollable = () => {
      if (contentRef.current) {
        const isContentOverflowing =
          contentRef.current.scrollHeight > window.innerHeight;
        setIsScrollable(isContentOverflowing);
      }
    };

    const handleResize = () => checkScrollable();
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        dispatch(closeMobMenu());
      }
    };

    const updateColor = () => {
      const shouldChangeColor = ["/login", "/register"].includes(
        location.pathname,
      );
      setChangeColor(shouldChangeColor);
    };

    checkScrollable();
    updateColor();

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [location.pathname, dispatch]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      dispatch(closeMobMenu());
    }
  };

  const handleCloseClick = () => {
    dispatch(closeMobMenu());
  };

  const handleNavClick = (e) => {
    dispatch(closeMobMenu());
  };

  return (
    <MobMenuOverlay onClick={handleOverlayClick}>
      <MobMenuStyled
        $isScrollable={isScrollable}
        ref={contentRef}
        $changeColor={changeColor}
      >
        <CloseBtn
          $changeColor={changeColor}
          onClick={handleCloseClick}
          type="button"
        >
          <Icon width={32} height={32} name="icon-cross-small" />
        </CloseBtn>
        <MobNavWrap>
          <MobNavLink
            to="/news"
            $changeColor={changeColor}
            onClick={handleNavClick}
          >
            News
          </MobNavLink>

          <MobNavLink
            to="/find-pet"
            $changeColor={changeColor}
            onClick={handleNavClick}
          >
            Find pet
          </MobNavLink>

          <MobNavLink
            to="/our-friends"
            $changeColor={changeColor}
            onClick={handleNavClick}
          >
            Our friends
          </MobNavLink>
        </MobNavWrap>
        {isLoggedIn ? <UserMenu burger /> : <AuthNav burger />}
      </MobMenuStyled>
    </MobMenuOverlay>
  );
};
