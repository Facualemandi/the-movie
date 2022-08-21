import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Popular from "../../components/Popular/Popular";
import Tv from "../../components/Popular/Tv";
import Search from "../../components/Search/Search";
import RatedMovie from "../../components/TopRated/RatedMovie";

const MorePopular = styled.p`
  font-size: 22px;
  font-family: "Montserrat", sans-serif;
  margin: 10px;
  font-weight: 500;
`;

const SectionPopular = styled.section`
  display: flex;
  margin: auto;
  align-items: center;
  margin-top: 15px;
  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Select = styled.select`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgba(119, 119, 119, 0.485);
  border: none;
  background-color: white;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
`;

const Options = styled.option``;

const Home = () => {
  const [valueSelect, setValueSelect] = useState("streaming");


  const onChangeValue = (e) => {
    setValueSelect(e.target.value);
  };



  return (
    <>
      <Nav />
      <Search />

      <SectionPopular>
        <MorePopular>Mas popular</MorePopular>
        <Select onChange={onChangeValue} value="streaming">
          <Options value="streaming">Streaming</Options>
          <Options value="tv">On TV</Options>
        </Select>
      </SectionPopular>

      {valueSelect === "streaming" && <Popular />}
      {valueSelect === "tv" && <Tv />}

      <SectionPopular>
        <MorePopular>Lo mas valorado</MorePopular>
      </SectionPopular>

      <RatedMovie />
    </>
  );
};

export default Home;
