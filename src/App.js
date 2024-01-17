import React, { Fragment } from "react";
import Header from "./components/Header";
import Examples from "./components/Examples";
import ShowCard from "./components/ShowCard";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <ShowCard />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
