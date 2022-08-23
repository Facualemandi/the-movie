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

const ContainerAllCredits = styled.section`
    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
      background-color: white;
    }
    ::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(34, 193, 195);
      background: linear-gradient(90deg, rgba(34, 193, 195, 1) 28%, rgba(0, 139, 207, 1) 100% );
      border-radius: 10px;
    }
`
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
  }

  return (
    <>
      <Main>
        <TopCast>Top Billed Cast</TopCast>
        <ContainerAllCredits>
          {data.cast.map((el) => (
            <div key={el.id}>
              <Img
                alt={el.original_name}
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
        </ContainerAllCredits>
      </Main>
    </>
  );
};

export default AllCredits;
