import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../Hooks/useReactQuery";

const Container = styled.section`
  box-shadow: 0 0 10px 0 rgba(80, 80, 80, 0.185);
  border-radius: 10px;
  width: 95vw;

  @media (min-width: 1080px){
    width: auto;
    margin: 10px;
  }
`;
const Year = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

`;

const Movie = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  max-width: 100px;
  width: auto;

  @media (min-width: 400px){
    max-width: 300px;
  }
`;
const SectionMoviesPerson = styled.section`
  display: flex;
  width: max-content;
  @media (min-width: 1080px){
    cursor: pointer;
    :hover{
      transition: 0.5s;
      background-color: rgba(209, 209, 209, 0.493);
      box-shadow: 0 0 5px 0 rgba(119, 119, 119, 0.287);
    }
  }
  p {
    margin: 10px;
  }

  @media (min-width: 1080px) {
    cursor: pointer;
  }
`;
const H3 = styled.h3`
font-family: 'Roboto', sans-serif;
font-size: 28px;
margin: 10px;
`;
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: auto;
`;

const MoviesPerson = () => {
  console.log(useParams());
  const { id } = useParams();
  const API_URL = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;
  const { data, status } = useReactQuery(`${API_URL}`, "MoviesPerson");

  if (status === "loading") {
    return <p>Cargando</p>;
  } 


  return (
    <>
      <main>
        <H3>Acting</H3>
        <Container>
          {data.cast.map((film) => (
            <NavL to={`/movie/${film.id}`}>
              <SectionMoviesPerson key={film.id}>
                <Year>
                  {film.release_date
                    ? film.release_date
                    : film.first_air_date || "-----"}
                </Year>
                <Movie>{film.title ? film.title : film.name}</Movie>
              </SectionMoviesPerson>
            </NavL>
          ))}
        </Container>
      </main>
    </>
  );
};

export default MoviesPerson;
