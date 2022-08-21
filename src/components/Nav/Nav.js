import React from "react";
import styled from "styled-components";
import TMDB from "../../images/tmbdlogo.svg";

const Navegation = styled.nav`
  height: auto;
  background-color: #032541;
`;
const Logo = styled.img`
  width: 200px;
  height: 60px;
  margin: 5px 30px;
`;

const SectionOne = styled.section`
  border: 1px solid red;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin: auto;
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

const Ul = styled.ul`
  display: flex;
  color: white;
  list-style: none;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

const Li = styled.li`
  margin-left: 30px;
`;
const DivOne = styled.div`
  display: flex;
`;


const Nav = () => {
  return (
    <Navegation>
      <SectionOne>
        <DivOne>
          <Logo alt="Tmbd" src={TMDB} />
          <Ul>
            <Li>Películas</Li>
            <Li>TV Shows</Li>
            <Li>Peoples</Li>
          </Ul>
        </DivOne>
      </SectionOne>
    </Navegation>
  );
};

export default Nav;
