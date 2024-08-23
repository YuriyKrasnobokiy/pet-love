import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.ModalBDBGColor};
  &:hover {
    cursor: pointer;
  }
`;

export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  background: white;
  border-radius: 30px;
  cursor: auto;
  max-height: 80vh;
  overflow-y: auto;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background-color: transparent;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;
