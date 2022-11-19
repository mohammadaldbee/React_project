import React from "react";
import Header from "./Header";
import Counter from "../landing/Counter";
import About from "../landing/About";
import { Employees } from "../landing/Employees";

function AboutUs() {
  return (
    <>
      <Header />
      <Counter />
      <About />
      <Employees />
    </>
  );
}

export default AboutUs;
