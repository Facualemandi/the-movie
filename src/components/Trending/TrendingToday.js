import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import Trading from "../../images/trading.svg";
import Loader from "../../Loader/Loader";

const Main = styled.main`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  margin-top: 220px;
  position: relative;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(72, 72, 72, 0.213);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #0303032a;
      border-radius: 10px;
    }
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  z-index: 300;
`;

const Image = styled.img`
  width: 160px;
  height: 230px;
  border-radius: 10px;
`;

const NameFil = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-top: 5px;
  font-weight: 700;
`;

const DataFil = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
  color: grey;
`;

const TrendingImage = styled.img`
  width: max-content;
  height: 200px;
  position: absolute;
  top: 100px;
  z-index: 100;

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

const TrendingToday = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";
  const getTrengind = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["trending"], getTrengind);

  console.log(data);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <Main>
        {data.results.map((trad) => (
          <Container key={trad.id}>
            <Image alt="" src={`${URL_IMAGE}${trad.poster_path}`} />
            <NameFil>{`${trad.original_title || trad.name}`}</NameFil>
            <DataFil>{trad.release_date || trad.first_air_date}</DataFil>
          </Container>
        ))}
        <TrendingImage alt="" src={Trading} />
      </Main>
    </>
  );
};

export default TrendingToday;
