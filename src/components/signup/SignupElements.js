import styled from "styled-components";

export const SigninContainer = styled.div`
  min-height: fit-content;
  background: #3c3b63;
  margin: auto;
  align-content: center;
  justify-content: center;
  display: flex;
  position: relative;
`;

export const SigninWrapper = styled.div`
  background: #fff;
  margin-top: 100px;
  min-height: fit-content;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 1%;
  padding-top: 1%;
  width: 55%;
  max-width: 90%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const SigninP = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const SigninInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  border-radius: 10px;
  border: solid gray 1px;
  margin-bottom: 30px;
`;
