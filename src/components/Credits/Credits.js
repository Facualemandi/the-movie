import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Job = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10px;

  section {
    margin: 10px;
  }
`;

const Credits = () => {
  const { id } = useParams();
  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";

  const getCredits = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.json();
  };

  const { data, status } = useQuery(["credits"], getCredits);

  if (status === "loading") {
    return <p>Cargando</p>;
  } else {
    console.log(data);
  }

  const director = data.crew.filter((el) => el.job === "Director");
  const screen = data.crew.filter((el) => el.job === "Screenplay");
  const characters = data.crew.filter((el) => el.job === "Characters");

  console.log(characters);

  return (
    <>
      <Main>
        {director.map((dir) => (
          <section key={dir.id}>
            <Name>{dir.name}</Name>
            <Job>{dir.job}</Job>
          </section>
        ))}

        {screen.map((scr) => (
          <section key={scr.id}>
            <Name>{scr.name}</Name>
            <Job>{scr.job}</Job>
          </section>
        ))}

        {characters.map((char) => (
          <section key={char.id}>
            <Name>{char.name}</Name>
            <Job>{char.job}</Job>
          </section>
        ))}
      </Main>
    </>
  );
};

export default Credits;
