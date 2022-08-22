import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  let { id } = useParams();
  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";

  const movieDescription = async () => {
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.json();
  };

  const { data, status } = useQuery([`${id}`], movieDescription);

  if (status === "loading") {
    return <p>Cargando...</p>;
  } 

  return (
    <>
      <p>{data.title}</p>
    </>
  );
};

export default Description;
