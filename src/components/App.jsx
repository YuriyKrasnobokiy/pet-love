import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import Loader from "./Loader/Loader";

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
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};
