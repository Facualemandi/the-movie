import React from "react";
import Nav from "../../components/Nav/Nav";
import Popular from "../../components/Popular/Popular";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <>
      <Nav />
      <Search />
      <Popular/>
    </>
  );
};

export default Home;
