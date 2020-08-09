import styled from "styled-components";

const Container = styled.section`
  max-width: 960px;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  box-sizing: border-box;
  padding: 15px;
`;

const ContainerSearch = styled.section`
  max-width: 960px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: center;
`;

export { Container, ContainerSearch };
