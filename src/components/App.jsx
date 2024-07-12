import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import Loader from "./Loader/Loader";
import { refresh } from "../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/authSelectors";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const Home = lazy(() => import("../pages/Home/Home"));
const News = lazy(() => import("../pages/News/News"));
const OurFriends = lazy(() => import("../pages/OurFriends/OurFriends"));
const FindPet = lazy(() => import("../pages/FindPet/FindPet"));
const Registration = lazy(() => import("../pages/Registration/Registration"));
const Login = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const themes = {
  light: {
    colors: {
      textColor: "#262626",
      secondTextColor: "#8a8a89",
      accentColor: "#F6B83D",
      secondAccentColor: "#FFF4DF",
      mainBgColor: " #f9f9f9",
      ModalBgColor: "rgba(0, 0, 0, 0.5)",
      MobNavLinkColor: "#262626",
      MobNavLinkColorSecondary: "#fff",
      MobNavLinkBorder: "1px solid rgba(38, 38, 38, 0.15)",
      MobNavLinkBorderSecondary: "1px solid rgba(255, 255, 255, 0.15)",
      MobNavLinkBorderHover: "rgba(255, 255, 255, 0.5)",
      HomeTextColor: "#FFF",
      HomeTextAccentColor: "rgba(255, 255, 255, 0.4)",
      HomeBgColor: "#F6B83D",
      mobCloseColorPrimary: "#262626",
      mobCloseColorSecondary: "#fff",
      mobCloseColorHoverSec: "rgba(255, 255, 255, 0.5)",
      mobLoginBtnBGColor: "#F6B83D",
      mobLoginBtnBGHover: " #f9b020",
      mobLoginBtnColor: "#fff",
      mobLoginBtnBorder: "none",
      mobLoginBtnBorderSecondary: "1px solid rgba(255, 255, 255, 0.5)",

      mobRegBtnBG: "#FFF4DF",
      mobRegBtnBGHover: "#fbe7c1",
      mobRegBtnColor: "#F6B83D",
      notFoundTextColor: "#FFF",
      notFoundImgThumbBGC: "#f7bf50",
      notFoundBtnBGC: "#fff4df",
      notFoundBtnColor: "#f6b83d",
      friendCardBGColor: "#fff",
      FriendDescrTextAccentColor: "rgba(38, 38, 38, 0.5);",
      FriendWorkHoursBGColor: "#fff4df",
      FriendWorkHoursColor: "#f6b83d",
      NwCardDateColor: "rgba(38, 38, 38, 0.5)",
      NwCardReadMoreColor: "#f6b83d",
      searchInputColor: "rgba(38, 38, 38, 0.5)",
      searchInputBorderColor: "rgba(38, 38, 38, 0.15)",
      PaginationBtnBorderColor: "rgba(38, 38, 38, 0.2)",
      PaginationBtnColor: "rgba(38, 38, 38, 0.5)",
      PaginationBtnFill: "rgba(38, 38, 38, 0.5)",
      RegistrFormBG: "#fff",
      FormInputBorder: "1px solid rgba(38, 38, 38, 0.15)",
      FormInputColor: "rgba(38, 38, 38, 0.5)",
      FormBtnBgHover: "#f9b020",
      FormBtnColor: "#fff",
      Error: "#ef2447",
      Success: "#08aa83",
      FormBottomTextColor: "rgba(38, 38, 38, 0.5)",
      UserBtnBgColor: "#FFF4DF",
      UserBtnBgColorHover: "#fbe7c1",
    },
  },
  dark: {
    colors: {
      textColor: "white",
      secondTextColor: "#8a8a89",
      accentColor: "#F6B83D",
      secondAccentColor: "#FFF4DF",
      mainBgColor: "#121212",
      ModalBgColor: "#262626",
      MobNavLinkColor: "#262626",
      MobNavLinkBorder: "1px solid rgba(38, 38, 38, 0.15)",
      HomeTextColor: "#FFF",
      HomeTextAccentColor: "rgba(255, 255, 255, 0.4)",
      HomeBgColor: "#F6B83D",
      mobLoginBtnBGColor: "#F6B83D",
      mobLoginBtnBGHover: "#fff4df",
      mobLoginBtnColor: "#fff",
      mobLoginBtnBorder: "none",
      mobLoginBtnBorderSecondary: "1px solid rgba(255, 255, 255, 0.5)",
      mobRegBtnBG: "#FFF4DF",
      mobRegBtnBGHover: "#fbe7c1",
      mobRegBtnColor: "#F6B83D",
      notFoundTextColor: "#FFF",
      notFoundImgThumbBGC: "#f7bf50",
      notFoundBtnBGC: "#fff4df",
      notFoundBtnColor: "#f6b83d",
      friendCardBGColor: "transparent",
      FriendDescrTextAccentColor: "rgba(38, 38, 38, 0.5);",
      FriendWorkHoursBGColor: "#fff4df",
      FriendWorkHoursColor: "#f6b83d",
      NwCardDateColor: "rgba(38, 38, 38, 0.5)",
      NwCardReadMoreColor: "#f6b83d",
      searchInputColor: "rgba(38, 38, 38, 0.5)",
      searchInputBorderColor: "rgba(38, 38, 38, 0.15)",
      PaginationBtnBorderColor: "rgba(38, 38, 38, 0.2)",
      PaginationBtnColor: "rgba(38, 38, 38, 0.5)",
      PaginationBtnFill: "rgba(38, 38, 38, 0.5)",
      RegistrFormBG: "transparent",
      FormInputBorder: "1px solid rgba(38, 38, 38, 0.15)",
      FormInputColor: "rgba(38, 38, 38, 0.5)",
      FormBtnBgHover: "#f9b020",
      FormBtnBgHover: "#f9b020",
      FormBtnColor: "#fff",
      Error: "#ef2447",
      Success: "#08aa83",
      FormBottomTextColor: "rgba(38, 38, 38, 0.5)",
      UserBtnBgColor: "#FFF4DF",
      UserBtnBgColorHover: "#fbe7c1",
    },
  },
};

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Layout currentTheme={currentTheme} toggleTheme={toggleTheme}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="/login" component={<Home />} />
              }
            />

            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<Registration />} />
              }
            />

            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/" component={<Login />} />}
            />

            <Route
              path="/news"
              element={
                <PrivateRoute redirectTo="/login" component={<News />} />
              }
            />
            <Route
              path="/our-friends"
              element={
                <PrivateRoute redirectTo="/login" component={<OurFriends />} />
              }
            />
            <Route
              path="/find-pet"
              element={
                <PrivateRoute redirectTo="/login" component={<FindPet />} />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </ThemeProvider>
  );
};
