import {
  AddressItem,
  AdressList,
  BurgerBtn,
  CopyrightText,
  FooterNav,
  FooterWrapper,
  HeaderLogoLink,
  HeaderWrapper,
  SocialItem,
  SocialList,
  ThemeBtn,
  UserBtn,
} from "./Layout.styled";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpenMobMenu } from "../../redux/mob-menu/mobMenuSelectors";
import { openMobMenu } from "../../redux/mob-menu/mobMenuSlice";
import { MobMenu } from "../MobMenu/MobMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
const Layout = ({ children, toggleTheme, currentTheme }) => {
  const dispatch = useDispatch();
  const isOpenMobMenu = useSelector(selectIsOpenMobMenu);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
      <main>{children}</main>
      <footer>
        <FooterWrapper className="container">
          <FooterNav>
            <div>
              <Link to="/">
                {currentTheme === "dark" ? (
                  <Icon
                    height={20}
                    width={76}
                    name="icon-logo-white-small"
                  ></Icon>
                ) : (
                  <Icon height={20} width={76} name="icon-logo-small"></Icon>
                )}
              </Link>

              <SocialList>
                <SocialItem>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                </SocialItem>
                <SocialItem>
                  <Link href="#">
                    <ImYoutube />
                  </Link>
                </SocialItem>
                <SocialItem>
                  <Link href="#">
                    <FaFacebook />
                  </Link>
                </SocialItem>
              </SocialList>
            </div>

            <AdressList>
              <AddressItem>
                <a href="tel:+380638213205">+38 (063) 821-32-05</a>
              </AddressItem>

              <AddressItem>
                <a href="mailto:krasnobokiy.yuriy@gmail.com">
                  krasnobokiy.yuriy@gmail.com
                </a>
              </AddressItem>

              <AddressItem>
                <a
                  href="https://www.google.com/maps?q=Kyiv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kyiv, Ukraine
                </a>
              </AddressItem>
            </AdressList>
          </FooterNav>

          <CopyrightText>
            Yurii Krasnobokyi ©PetLove 2024. All rights reserved.
          </CopyrightText>
        </FooterWrapper>
      </footer>
    </>
  );
};

export default Layout;
