import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 30px;
`;

const SectionBtns = styled.section`
  display: flex;
  align-items: center;

  button {
    border: none;
    margin-left: 30px;
    height: max-content;
    padding: 10px;
    border-radius: 5px;
    @media (min-width: 1080px) {
      cursor: pointer;
    }
  }
`;

const Image = styled.img`
  width: 350px;
  height: 300px;
  border-radius: 10px;
`;

const SectiosItems = styled.section`
  overflow-x: auto;
  display: flex;

  div {
    margin: 15px;
  }

  @media (min-width: 780px){
    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
      background-color: white;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(72, 72, 72, 0.213);
      border-radius: 10px;
      background-color: white;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(34, 193, 195);
      background: linear-gradient(90deg, rgba(34, 193, 195, 1) 28%, rgba(0, 139, 207, 1) 100% );
      border-radius: 10px;
      margin-bottom: 15px;
    }
  }
`;
const H3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  margin: 15px;
`;

const ButtonOne = styled.button`
  background: ${({ value }) =>
    value === true
      ? "linear-gradient(90deg, rgba(34, 193, 195, 1) 28%, rgba(0, 139, 207, 1) 100% )"
      : "  rgba(188, 188, 188, 0.296);"};
`;
const ButtonTwo = styled.button`
  background: ${({ value }) =>
    value === true
      ? "linear-gradient(90deg, rgba(34, 193, 195, 1) 28%, rgba(0, 139, 207, 1) 100% )"
      : "rgba(188, 188, 188, 0.296);"};
`;
const ButtonThree = styled.button`
  background: ${({ value }) =>
    value === true
      ? "linear-gradient(90deg, rgba(34, 193, 195, 1) 28%, rgba(0, 139, 207, 1) 100% )"
      : "rgba(188, 188, 188, 0.296);"};
`;

const ImageMovie = () => {
  const [posters, setPosters] = useState(false);
  const [logos, setLogos] = useState(false);
  const [backDrops, setBackDrops] = useState(true);

  const { id } = useParams();
  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const getImage = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["image"], getImage);

  if (status === "loading") {
    return <p>Cargando...</p>;
  } else {
    console.log(data);
  }

  const getBackdrops = () => {
    setBackDrops(true);
    setLogos(false);
    setPosters(false);
  };
  const getPosters = () => {
    setBackDrops(false);
    setLogos(false);
    setPosters(true);
  };
  const getLogos = () => {
    setBackDrops(false);
    setLogos(true);
    setPosters(false);
  };
  

  return (
    <>
      <Main>
        <SectionBtns>
          <H3>Media</H3>
          
          <ButtonOne value={backDrops} onClick={getBackdrops}>
            Backdrops
          </ButtonOne>
          <ButtonTwo value={logos} onClick={getLogos}>
            Logos
          </ButtonTwo>
          <ButtonThree value={posters} onClick={getPosters}>
            Posters
          </ButtonThree>
        </SectionBtns>

        <SectiosItems>
          {backDrops &&
            data.backdrops.map((back) => (
              <div key={back.file_path}>
                <Image alt="" src={`${URL_IMAGE}${back.file_path}`} />
              </div>
            ))}
        </SectiosItems>

        <SectiosItems>
          {logos &&
            data.logos.map((logo) => (
              <div key={logo.file_path}>
                <Image alt="" src={`${URL_IMAGE}${logo.file_path}`} />
              </div>
            ))}
        </SectiosItems>

        <SectiosItems>
          {posters &&
            data.posters.map((post) => (
              <div key={post.file_path}>
                <Image alt="" src={`${URL_IMAGE}${post.file_path}`} />
              </div>
            ))}
        </SectiosItems>
      </Main>
    </>
  );
};

export default ImageMovie;
