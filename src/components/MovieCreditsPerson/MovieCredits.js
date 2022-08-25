import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../Hooks/useReactQuery";
import NotFundImage from '../../images/ImagenNotFund.jpg'
import Footer from "../Footer/Footer";

const SectionMovieCredits = styled.section`
  display: flex;
  overflow-x: auto;
`;

const Img = styled.img`
width: 170px;
height: 230px;
border-radius: 10px;
`

const DivMovie = styled.div`
 display: flex;
 flex-direction: column;
 margin: 10px;
 max-width: 170px;
 margin-bottom: 10px;

`
const NameMovie = styled.p`
 font-size: 18px;
 font-family: 'Roboto', sans-serif;
 margin-top: 10px;

`
const NavL = styled(NavLink)`
 text-decoration: none;
 color: black;
`
const MovieCredits = () => {
  const { id } = useParams();
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const API_URL = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;

  const { data, status } = useReactQuery(`${API_URL}`, id);

  if (status === "loading") {
    return <p>Cargando</p>;
  }

  return (
    <>
      <main>
        <SectionMovieCredits>
          {data.cast.map((movie) => (
            <NavL key={movie.id} to={`/movie/${movie.id}`}>
             <DivMovie>
               <Img alt={movie.original_title} src={movie.poster_path ? `${URL_IMAGE}${movie.poster_path}` : NotFundImage} />
               <NameMovie>{movie.original_title}</NameMovie>
             </DivMovie>
            </NavL>
          ))}
        </SectionMovieCredits>
       </main>
    </>
  );
};

export default MovieCredits;
