import { observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import CreateSport from "./components/CreateSport";
import SportItem from "./components/SportItem";
import { darkTheme, AppWrapper, GlobalStyle } from "./components/styles";
import sportStore from "./store/sportStore";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppWrapper>
        <GlobalStyle />

        {sportStore.allSports.map((sport) => (
          <SportItem sport={sport} />
        ))}

        <CreateSport />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default observer(App);
