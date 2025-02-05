import Container from "./components/Container";
import { MessageProvider } from "./contexts/MessageContext";
import List from "./components/list/List";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Container>
        <SearchBar />
        <Title>Car Management App</Title>
        <MessageProvider>
          <List />
        </MessageProvider>
      </Container>
    </>
  );
}

export default App;
