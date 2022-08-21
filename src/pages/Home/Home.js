import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Popular from "../../components/Popular/Popular";
import Search from "../../components/Search/Search";
import Tv from "../../components/Tv/Tv";

const MorePopular = styled.p`
  font-size: 22px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin: 10px;
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
        <Select onChange={onChangeValue} defaultValue="streaming">
          <Options value="streaming">Streaming</Options>
          <Options value="tv">On TV</Options>
        </Select>
      </SectionPopular>

      {valueSelect === "streaming" && <Popular />}
      {valueSelect === "tv" && <Tv />}

      <SectionPopular>
        <MorePopular>Gratis para ver</MorePopular>
        <Select onChange={onChangeValue} defaultValue="streaming">
          <Options value="peliculas">Peliculas</Options>
          <Options value="freetv">TV</Options>
        </Select>
      </SectionPopular>


    </>
  );
};

export default Home;
