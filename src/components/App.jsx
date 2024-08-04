import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import Loader from "./Loader/Loader";
import { refresh } from "../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectUser } from "../redux/auth/authSelectors";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { themes } from "../themes";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

const Home = lazy(() => import("../pages/Home/Home"));
const News = lazy(() => import("../pages/News/News"));
const OurFriends = lazy(() => import("../pages/OurFriends/OurFriends"));
const FindPet = lazy(() => import("../pages/FindPet/FindPet"));
// const Registration = lazy(() => import("../pages/Registration/Registration"));
// const Login = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (!currentUser.name) return;
    dispatch(refresh());
  }, [dispatch, currentUser]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Layout currentTheme={currentTheme} toggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/news" element={<News />} />

            <Route path="/our-friends" element={<OurFriends />} />

            <Route path="/find-pet" element={<FindPet />} />

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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </ThemeProvider>
  );
};
