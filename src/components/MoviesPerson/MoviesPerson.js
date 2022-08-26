import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../Hooks/useReactQuery";

const Container = styled.section`
  margin: 10px;
  box-shadow: 0 0 5px 0 rgba(80, 80, 80, 0.285);
  border-radius: 10px;
`;
const Year = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

const Movie = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;
const SectionMoviesPerson = styled.section`
  display: flex;
  p {
    margin: 10px;
  }

  @media (min-width: 1080px) {
    cursor: pointer;
  }
`;
const H3 = styled.h3`
  margin: 10px;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
`;
const NavL = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const MoviesPerson = () => {
  console.log(useParams());
  const { id } = useParams();
  const API_URL = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;
  const { data, status } = useReactQuery(`${API_URL}`, "MoviesPerson");

  if (status === "loading") {
    return <p>Cargando</p>;
  } else {
    console.log(data);
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
