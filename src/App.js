import './App.css'
import InputComponent from "./InputComponent/inputComponent"
import {CardList} from "./CardComponents/cardList";
import './App.css';
import {Container} from "@mui/material";

function App() {
  return (
      <Container maxWidth="sm">
        <InputComponent/>
        <CardList/>
      </Container>
  );
}

export default App;
