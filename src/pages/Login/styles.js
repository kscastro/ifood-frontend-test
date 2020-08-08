import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;
  flex-direction: column;
  background: #4300ff;
  background: linear-gradient(135deg, #4300ff 0%, #717371 100%);
`;

const Title = styled.h1`
  font-family: Roboto, sans-serif;
  color: #ffffff;
  text-align: center;
  font-size: 4.6rem;
  font-weight: 700;
`;

const Button = styled.button`
  display: inline-flex;
  text-align: center;
  align-items: center;
  background-color: #1db954;
  border-radius: 999px;
  padding: 0 60px;
  min-height: 54px;
  min-width: 160px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 3px;
  transition: background-color 200ms ease-in-out;
  margin-top: 40px;

  &:hover {
    background-color: #1ed760;
  }

  &:active {
    background-color: #1db954;
  }

  &:focus {
    outline: none;
  }
`;

export { Container, Title, Button };
