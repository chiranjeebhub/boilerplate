import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../Context";

import { Link } from "react-router-dom";

const Nav = () => {
  const value = useContext(MyContext);
  return (
    <>
      <Link to="/">Home</Link>&nbsp;| &nbsp;
      <Link to="/account">Account</Link>
    </>
  );
};

export default Nav;
