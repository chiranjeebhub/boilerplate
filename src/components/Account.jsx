import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../Context";
import { Input } from "antd";

const Account = () => {
  const value = useContext(MyContext);

  return (
    <>
      <p>I am Account page</p>
      <Input
        value={value.newState}
        onChange={e => value.setNewState(e.target.value)}
      />
    </>
  );
};

export default Account;
