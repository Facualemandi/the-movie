import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Loader from "../../Loader/Loader";
import { NavLink } from "react-router-dom";

const Main = styled.main`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  margin-top: 15px;

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
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const Popular = () => {
  let X = Math.floor(Math.random() * 150);
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";
  const API_URL = "https://api.themoviedb.org/3/movie";

  const getPopular = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`
    );
    return response.json();
  };

  const { data, status } = useQuery(["popular"], getPopular);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <Main>
        {data.results.map((film) => (
          <NavL key={film.id} to={`/movie/${film.id}`}>
            <Container>
              <Image alt="" src={`${URL_IMAGE}${film.poster_path}`} />
              <NameFil>{film.title}</NameFil>
              <DataFil>{film.release_date}</DataFil>
            </Container>
          </NavL>
        ))}
      </Main>
    </>
  );
};

export default Popular;
