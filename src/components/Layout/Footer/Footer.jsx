import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";
import {
  AddressItem,
  AdressList,
  CopyrightText,
  FooterNav,
  FooterWrapper,
  SocialItem,
  SocialList,
} from "./Footer.styled";

export const Footer = ({ currentTheme }) => {
  return (
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
  );
};
