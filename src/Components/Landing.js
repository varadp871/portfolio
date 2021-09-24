import React, { Component } from "react";
import BodyPart from "./BodyPart";
import Heading from "./Heading";
import Quotes from "./Quotes";

const Landing = () => {
  return (
    <div>
      <Heading />
      <BodyPart />
      <Quotes />
    </div>
  );
};

export default Landing;
