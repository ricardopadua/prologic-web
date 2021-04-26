import styled from 'vue3-styled-components';
import { Card } from 'ant-design-vue';

export const DivStyled = styled.div`
  background-image: radial-gradient(#f8f8f8 -500%, #1890ff);
  background-color: #1890ff;
  height: 100vh;
  overflow: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin); 
  font-family: Montserrat, sans-serif;
  color: white;
  z-index: 1
`;

export const CardStyled = styled(Card)`
  background: #f8f8f8;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
  width: 320px;
  height: 400px;

 .ant-card-head {
    min-height: 48px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: rgba(103, 106, 108, 1);
    font-weight: 500;
    font-size: 26px;
    background: transparent;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 2px 2px 0 0;
    zoom: 1;
    line-height: 40px; 
    letter-spacing: 1px; 
  }
`;

export const PStyled = styled.p`
  font-family: 'Open sans', sans-serif; 
  color: #777777; 
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H4Styled = styled.h5`
  font-family: 'Open sans', sans-serif; 
  color: #777777; 
  font-weight: 700;
  margin: 0px; 
  padding: 0px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgStyled = styled.img`
  font-family: 'Open sans', sans-serif; 
  color: #777777; 
  font-size: 16px;
`;
