import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom";
import {
  AddressItem,
  AdressList,
  CopyrightText,
  FooterNav,
  FooterWrapper,
  SocialItem,
  SocialList,
} from "./Footer.styled";
import { Logo } from "../Logo/Logo";

export const Footer = ({ currentTheme }) => {
  return (
    <footer>
      <FooterWrapper className="container">
        <FooterNav>
          <div>
            <Logo currentTheme={currentTheme} />

            <SocialList>
              <SocialItem>
                <Link to="https://www.instagram.com">
                  <FaInstagram />
                </Link>
              </SocialItem>
              <SocialItem>
                <Link to="https://www.youtube.com">
                  <ImYoutube />
                </Link>
              </SocialItem>
              <SocialItem>
                <Link to="https://www.facebook.com">
                  <FaFacebook />
                </Link>
              </SocialItem>
            </SocialList>
          </div>

          <AdressList>
            <AddressItem>
              <a
                href="https://www.google.com/maps?q=Kyiv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kyiv, Ukraine
              </a>
            </AddressItem>

            <AddressItem>
              <a href="tel:+380638213205">+38 (063) 821-32-05</a>
            </AddressItem>

            <AddressItem>
              <a href="mailto:krasnobokiy.yuriy@gmail.com">
                krasnobokiy.yuriy@gmail.com
              </a>
            </AddressItem>
          </AdressList>
        </FooterNav>

        <CopyrightText>
          Yurii Krasnobokyi ©PetLove 2024. All rights reserved.
        </CopyrightText>
      </FooterWrapper>
    </footer>
  );
};
