import GlobalStyle from "./global";
import styled from 'styled-components';
import Form from './components/Form'
import Grid from "./components/Grid";

const Container = styled.div`

  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const Title = styled.h1`

`

function App() {
  return (
    <>
      <GlobalStyle/>

      <Container>

      <Title>Cadastro de Produtos</Title>

      <Form/>

      <Grid />

      </Container>
    </>
  );
}

export default App;
