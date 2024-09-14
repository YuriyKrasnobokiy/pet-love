import styled from "styled-components";

export const BtnLogOut = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  border-radius: 30px;
  padding: 12px 42px;
  justify-content: center;
  color: ${(props) =>
    props.$isHome
      ? props.theme.colors.mobRegBtnColor
      : props.theme.colors.BtnLogoutColor};
  background-color: ${(props) =>
    props.$isHome
      ? props.theme.colors.mobRegBtnBG
      : props.theme.colors.BtnLogoutBgColor};
  transition: background-color 300ms ease-in-out;
  width: 178px;
  &:hover {
    background-color: ${(props) =>
      props.$isHome
        ? props.theme.colors.mobRegBtnBGHover
        : props.theme.colors.BtnLogoutBgHoverColor};
  }

  @media screen and (min-width: 768px) {
    padding: 15px 35px;
    font-size: 16px;
    line-height: 1.25;
    margin-right: ${(props) => (props.$isBurger ? 0 : "8px")};
    width: auto;
  }
`;
