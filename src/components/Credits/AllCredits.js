import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../../images/ImagenNotFund.jpg";

const Img = styled.img`
  width: 170px;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Main = styled.main`
  section {
    overflow-x: auto;
    display: flex;

    div {
      width: max-content;
      margin: 10px;
      border-radius: 15px;
      box-shadow: 0 0 5px 0 rgba(64, 64, 64, 0.781);
    }
  }
`;

const NameActor = styled.p`
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  margin: 3px;
  font-weight: bold;
`;
const Character = styled.p`
  margin: 5px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
`;

const TopCast = styled.h3`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  margin: 15px 0 15px 15px;
`;
const AllCredits = () => {
  const { id } = useParams();
  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const getAllCredits = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.json();
  };

  const { data, status } = useQuery(["allCredits"], getAllCredits);

  if (status === "loading") {
    return <p>Cargando</p>;
  } else {
    console.log(data);
  }

  return (
    <>
      <Main>
        <TopCast>Top Billed Cast</TopCast>
        <section>
          {data.cast.map((el) => (
            <div>
              <Img
                alt=""
                src={`${
                  el.profile_path === null
                    ? NotFound
                    : `${URL_IMAGE}${el.profile_path}`
                }`}
              />
              <NameActor>{el.original_name}</NameActor>
              <Character>{el.character}</Character>
            </div>
          ))}
        </section>
      </Main>
    </>
  );
};

export default AllCredits;
