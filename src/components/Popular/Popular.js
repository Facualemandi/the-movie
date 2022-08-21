import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  /* background-color: rgba(205, 205, 205, 0.328); */
  margin-top: 15px;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
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
const MorePopular = styled.p`
  font-size: 22px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin: 10px;
`;

const DataFil = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
  color: grey;
`;
const Popular = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const getPopular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&page=1"
    );
    return response.json();
  };

  const { data, status } = useQuery(["popular"], getPopular);

  if (status === "loading") {
    return <p>Facundo</p>;
  }
  console.log(data);

  return (
    <>
      <MorePopular>Mas popular</MorePopular>
      <Main>
        {data.results.map((film) => (
          <Container>
            <Image alt="" src={`${URL_IMAGE}${film.poster_path}`} />
            <NameFil>{film.title}</NameFil>
            <DataFil>{film.release_date}</DataFil>
          </Container>
        ))}
      </Main>
    </>
  );
};

export default Popular;