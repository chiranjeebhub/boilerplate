import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../Context";

const Home = () => {
  const value = useContext(MyContext);
  return (
    <>
      <p>I am Home page showing state value via context</p>
      <p>{value.newState}</p>
      <p>{value.other}</p>
    </>
  );
};

export default Home;
