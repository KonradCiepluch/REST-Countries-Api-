import React, { useState } from "react";
import { Wrapper } from "./App.styles";
import Header from "./components/Heading/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import DataProvider from "./components/DataProvider/DataProvider";
import MainSection from "./components/MainSection/MainSection";
import SearchBar from "./components/SearchBar/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo/CountryInfo";

const App = () => {
  const [mode, setMode] = useState(true);
  const switchMode = () => setMode(!mode);

  const [value, setValue] = useState("");

  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle darkmode={mode} />
        <Router>
          <Wrapper>
            <Header darkmode={mode} switchMode={switchMode} />
            <Switch>
              <Route path="/" exact>
                <SearchBar value={value} setValue={setValue} darkmode={mode} />
                <MainSection darkmode={mode} />
              </Route>
              <Route path="/country/:name">
                <CountryInfo darkmode={mode} />
              </Route>
              <Route
                render={() => (
                  <h1
                    style={{
                      color: mode ? "white" : "black",
                      textAlign: "center",
                    }}
                  >
                    This site doesn't exist
                  </h1>
                )}
              />
            </Switch>
          </Wrapper>
        </Router>
      </ThemeProvider>
    </DataProvider>
  );
};

export default App;
