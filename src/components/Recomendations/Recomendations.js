import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../Hooks/useReactQuery";

const Main = styled.main``;

const Conatiner = styled.section`
  display: flex;
  overflow-x: auto;
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
`;
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 10px;
`;

const H3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  margin: 10px;
`;
const Recomendations = () => {
  const { id } = useParams();
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&page=1`;
  const { data, status } = useReactQuery(`${API_URL}`, "recomendations");

  if (status === "loading") {
    return <p>Cargando</p>;
  } else {
    console.log(data);
  }

  return (
    <>
      <Main>
        <H3>Recomendations</H3>
        <Conatiner>
          {data.results.map((el) => (
            <NavL to={`/movie/${el.id}'`}>
              <Img alt={el.title} src={`${URL_IMAGE}${el.poster_path}`} />
              <p>{el.title}</p>
            </NavL>
          ))}
        </Conatiner>
      </Main>
    </>
  );
};

export default Recomendations;
