import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import Loader from "./Loader/Loader";
import OurFriends from "../pages/OurFriends/OurFriends";
import { FindPet } from "../pages/FindPet/FindPet";
import NotFound from "../pages/NotFound/NotFound";

const Home = lazy(() => import("../pages/Home/Home"));
const News = lazy(() => import("../pages/News/News"));

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
      MobNavLinkBorder: "1px solid rgba(38, 38, 38, 0.15)",
      HomeTextColor: "#FFF",
      HomeTextAccentColor: "rgba(255, 255, 255, 0.4)",
      HomeBgColor: "#F6B83D",
      mobLoginBtnBGColor: "#F6B83D",
      mobLoginBtnBGHover: " #f9b020",
      mobLoginBtnColor: "#fff",
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
    },
  },
};

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Layout currentTheme={currentTheme} toggleTheme={toggleTheme}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/our-friends" element={<OurFriends />}></Route>
            <Route path="/find-pet" element={<FindPet />}></Route>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};
