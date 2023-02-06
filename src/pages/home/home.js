import React from "react";
import { Navbar } from "../../components/navbar";
import { Body } from "./body";

function Home() {
  return (
    <div>
      <Navbar sticky />
      {/* <Header />
      <Body />
      <Footer /> */}
      <Body />
    </div>
  );
}

export default Home;
