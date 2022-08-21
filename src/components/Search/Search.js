import React from "react";
import styled from "styled-components";
import Saul from "../../images/saul.jpg";

const Main = styled.main`
  position: relative;
`;

const Img = styled.img`
  width: 100vw;
  height: 250px;
  z-index: 100;
`;




const Search = () => {
  return (
    <>
      <Main>
        <Img alt="" src={Saul} />

      </Main>
    </>
  );
};

export default Search;
