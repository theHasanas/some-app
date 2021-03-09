import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, AppWrapper, GlobalStyle } from "./components/styles";

function App() {
  const [number, setNumber] = useState(5);

  const [nameInput, setNameInput] = useState("");
  const [name, setName] = useState("no name");

  const decrement = () => {
    setNumber(number - 1);
    // number = number - 1
  };

  const handleInputChange = (event) => {
    const newInput = event.target.value;
    setNameInput(newInput);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppWrapper>
        <GlobalStyle />
        <h1>{name}</h1>

        <input onChange={handleInputChange} />
        <button onClick={() => setName(nameInput)}>Confirm Name</button>

        <br />
        <br />
        <br />

        <button onClick={() => setNumber(number + 1)}>+</button>

        <h1>{number}</h1>

        <button onClick={decrement}>-</button>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
