import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MyContext } from "./Context";
import "antd/dist/antd.css";

import Home from "./components/Home";
import Account from "./components/Account";
import Nav from "./components/Nav";

function App() {
  const [newState, setNewState] = useState("default value");
  const [other, setOther] = useState("other value");

  const value = { newState, setNewState };

  useEffect(() => {}, []);

  return (
    <>
      <MyContext.Provider value={value}>
        <BrowserRouter>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} />
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
