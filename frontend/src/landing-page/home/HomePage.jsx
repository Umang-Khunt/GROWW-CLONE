import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../../OpenAccount";
import Pricing from "./Pricing";

export default function HomePage() {
  return (
    <>
     
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
     
    </>
  );
}
