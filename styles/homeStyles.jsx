import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

export const RoundButton = styled.button`
  background-color: #ff8906;
  width: 14vw;
  height: 14vw;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 2%;
  right: 1%;
  box-shadow:0 0 16px 2px #ff8906;
  cursor: pointer;
  outline: none;
  max-width:50px;
  max-height:50px;
`;
export const Label = styled.h1`
  position: absolute;
  top: 45%;
  left: 31%;
  color: white;
`;
