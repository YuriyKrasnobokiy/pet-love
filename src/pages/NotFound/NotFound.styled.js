import styled from "styled-components";

export const NotFoundCont = styled.div`
  width: 335px;
  padding: 0 20px 20px;
  margin: 0 auto;
`;

export const NotFoundTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.accentColor};
  border-radius: 30px;
  padding: 245px 0;
`;

export const NotFoundTitle = styled.h2`
  display: flex;
  font-weight: 800;
  font-size: 120px;
  line-height: 1;
  color: #fff;
  margin-bottom: 20px;
`;

export const ImgThumb = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: #f7bf50;
  text-align: center;
`;

export const ImgStyled = styled.img`
  border-radius: 100%;
`;

export const NotFoundDescr = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: #fff;
  margin-bottom: 20px;
`;

export const NotFoundBtn = styled.button`
  border-radius: 30px;
  padding: 12px 30px;
  width: 150px;
  height: 42px;
  background: #fff4df;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  color: #f6b83d;
`;
