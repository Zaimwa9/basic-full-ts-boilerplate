import React from "react";
import { Header, BCol, BRow } from "design-system/index";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";

import store from "../app/store";

import { useGetPokemonByNameQuery } from "../app/services/pokemon";
import { useCounter } from "../utils/useCounter";

const AppPlaceholder = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const { counter, increment, decrement, goWild } = useCounter(0);

  return (
    <Container>
      <BRow>
        <BCol>
          <Header />
        </BCol>
      </BRow>
      <BRow>
        <BCol justify="center">{isLoading ? "loading" : data.name}</BCol>
      </BRow>
      <BRow>
        <BCol justify="center">{Math.round(counter)}</BCol>
        <BCol justify="center">
          <div onClick={increment}>Increment</div>
        </BCol>
        <BCol justify="center">
          <div onClick={decrement}>Decrement</div>
        </BCol>
        <BCol justify="center">
          <div onClick={goWild}>Go Wild</div>
        </BCol>
      </BRow>
      {error}
    </Container>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppPlaceholder />
    </Provider>
  );
}

export default App;
