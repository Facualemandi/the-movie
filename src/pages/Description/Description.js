import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import { MdArrowDropDown } from "react-icons/md";

const SecondNav = styled.nav`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f4c71;
  color: white;
  font-family: "Roboto", sans-serif;

  p {
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Main = styled.main`
  height: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const ImgDrop = styled.img`
  width: 100%;
  height: 250px;

  @media (min-width: 780px) {
    height: 270px;
  }
  @media (min-width: 1080px) {
    height: 350px;
  }
  @media (min-width: 1380px) {
    height: 400px;
  }
`;

const ImgPoster = styled.img`
  width: 250px;
  height: 300px;
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 500;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.665);

  @media (min-width: 1080px) {
    width: 30%;
    top: 5px;
    height: 340px;
  }
  @media (min-width: 1380px) {
    width: 25%;
    top: 5px;
    height: 380px;
  }
`;

const SectionImg = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const DivImagePoster = styled.div`
  width: 100%;
  position: relative;
`;

const DivOpacity = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.572);

  @media (min-width: 780px) {
    height: 270px;
  }
  @media (min-width: 1080px) {
    height: 300px;
  }
  @media (min-width: 1380px) {
    height: 400px;
  }
`;

const Description = () => {
  let { id } = useParams();
  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const movieDescription = async () => {
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.json();
  };

  const { data, status } = useQuery([`${id}`], movieDescription);

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  console.log(data);

  return (
    <>
      <Nav />

      <SecondNav>
        <p>
          OverView <MdArrowDropDown />
        </p>
        <p>
          Media <MdArrowDropDown />
        </p>
        <p>
          Fandom <MdArrowDropDown />
        </p>
        <p>
          Share <MdArrowDropDown />
        </p>
      </SecondNav>

      <Main>
        <SectionImg>
          <ImgPoster alt="" src={`${URL_IMAGE}${data.poster_path}`} />

          <DivImagePoster>
            <ImgDrop alt="" src={`${URL_IMAGE}${data.backdrop_path}`} />
            <DivOpacity></DivOpacity>
          </DivImagePoster>
        </SectionImg>


        <p>Facu</p>
      </Main>
    </>
  );
};

export default Description;
