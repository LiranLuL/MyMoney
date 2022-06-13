import styled from "styled-components";
import Image from "next/image";

export const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  height: 5vh;
  width: 90%;
  border-radius: 10px;
  background-color: white;
  padding-right:20px;
  padding-left:10px;
  margin-bottom:25px;
  background-color:#0f0e17;
  
  box-shadow:0 0px 10px 2px #f25f4c;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction:column;
  align-items: center;
  min-height: 50vh;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fffffe;
`;

export const CategoryIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fffffe;

`;
