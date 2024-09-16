import styled from "styled-components";

export const ModalEditUserWrap = styled.div`
  padding: 40px 20px;
`;

export const EditUserTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  color: ${(props) => props.theme.colors.ModalEditUserTitleColor};
  margin-bottom: 20px;
`;
