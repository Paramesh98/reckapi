import styled from "styled-components";
import Dashboard from "./pages/dashboard";

const Container = styled.div`
  background-color: #232427;
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
}

export default App;
