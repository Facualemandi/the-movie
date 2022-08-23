import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NullAvatar from "../../images/ImagenNotFund.jpg";
import TheAvatar from "../../images/avatar.jpg";

const Main = styled.main``;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const DivContainerUser = styled.div`
  display: flex;
  margin: 30px;
  margin-top: 30px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.164);
`;
const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  h4 {
    font-family: "Montserrat", sans-serif;
    margin: 3px;
    font-size: 14px;
    font-weight: 400;

    span {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: 600;
    }
  }

  p {
    font-family: "Montserrat", sans-serif;
    margin: 3px;
    font-size: 14px;
    font-weight: 400;

    span {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

const Content = styled.p`
  padding-top: 15px;
`

const Reviews = () => {
    

  const { id } = useParams();

  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const getReviews = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.json();
  };

  const { data, status } = useQuery(["reviews"], getReviews);

  if (status === "loading") {
    return <p>Cargando</p>;
  }


  

  const newData = data.results.splice(1);


  return (
    <>
      <Main>
        {data.results.map((el) => (
          <section key={el.id}> 
            <DivContainerUser>
              <Avatar
                alt=""
                src={
                  el.author_details.avatar_path === null
                    ? NullAvatar
                    : TheAvatar
                }
              />
              <DivUser>
                <h4>
                  A review <span>{el.author}</span>
                </h4>
                <p>
                  Written by{" "}
                  <span>
                    {el.author_details.name === ""
                      ? ` ${el.author}`
                      : `${el.author_details.name}`}
                  </span>
                </p>
                <Content>{el.content}</Content>
              </DivUser>
            </DivContainerUser>
          </section>
        ))}
        <p onClick={''}>Read All View</p>
      </Main>
    </>
  );
};

export default Reviews;