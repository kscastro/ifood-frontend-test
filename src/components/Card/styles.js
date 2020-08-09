import styled from "styled-components";

const Container = styled.div`
  background: #282828;
  width: 100%;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;

  &:hover {
    webkit-filter: blur(1px);
    filter: blur(1px);
  }
`;

const Title = styled.h1`
  font-size: 18px;
  margin: 7px 10px 5px;
  color: #ffffff;
  font-weight: 700;
  height:30px;
`;

export { Container, Image, Title };
