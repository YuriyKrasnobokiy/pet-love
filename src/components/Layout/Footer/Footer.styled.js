import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const SocialItem = styled.li`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const AdressList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  flex-direction: column;
`;

export const AddressItem = styled.li`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.03em;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.03em;
`;
