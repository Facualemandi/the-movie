import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlinePlaySquare } from "react-icons/ai";
import YouTube from "react-youtube";

const SecondNav = styled.nav`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f4c71;
  color: white;
  font-family: "Roboto", sans-serif;

  p {
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Main = styled.main`
  height: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const ImgDrop = styled.img`
  width: 100%;
  height: 250px;

  @media (min-width: 780px) {
    height: 270px;
  }
  @media (min-width: 1080px) {
    height: 350px;
  }
  @media (min-width: 1380px) {
    height: 400px;
  }
`;

const ImgPoster = styled.img`
  width: 250px;
  height: 300px;
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 500;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.665);

  @media (min-width: 1080px) {
    width: 30%;
    top: 5px;
    height: 340px;
  }
  @media (min-width: 1380px) {
    width: 25%;
    top: 5px;
    height: 380px;
  }
`;

const SectionImg = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    border: 1px solid red;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const DivImagePoster = styled.div`
  width: 100%;
  position: relative;
`;

const DivOpacity = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.572);

  @media (min-width: 780px) {
    height: 270px;
  }
  @media (min-width: 1080px) {
    height: 350px;
  }
  @media (min-width: 1380px) {
    height: 400px;
  }
`;

const SectionDescription = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3 {
    display: flex;
    font-family: "Roboto", sans-serif;
    align-items: center;
    font-size: 24px;
    margin-left: 15px;

    span {
      margin-left: 5px;
      font-size: 18px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    color: black;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    background-color: white;
    border: 1px solid black;
  }

  @media (min-width: 1080px) {
  }
`;

const ContainerTrailer = styled.section`
  position: absolute;
  top: 0px;
  height: 100vh;
  width: 100vw;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.879);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  display: ${({ value }) => (value ? "block" : "none")};
`;

const ClosedTrailer = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
  color: white;
  border-radius: 100%;
`;

const SectionTrailer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconTrailer = styled(AiOutlinePlaySquare)`
  margin-right: 10px;
`;

const OverView = styled.p`
  width: 100%;
  display: flex;
  margin: 15px auto;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;

const Description = () => {
  const [setVideo, setSetVideo] = useState("");
  const [getTrailer, setGetTrailer] = useState(false);

  let { id } = useParams();
  const API_KEY = "c2b89afaf7bfa26140ce3d2bc5b5d295";
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  const movieDescription = async () => {
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    );
    return response.json();
  };

  const { data, status } = useQuery([`${id}`], movieDescription);

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  console.log(data);

  const openTrailer = () => {
    const trailer = data.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    setGetTrailer(true);
    return setSetVideo(trailer.key);
  };

  const closedTrailer = () => {
    setGetTrailer(false);
  };

  return (
    <>
      <Nav />

      <SecondNav>
        <p>
          OverView <MdArrowDropDown />
        </p>
        <p>
          Media <MdArrowDropDown />
        </p>
        <p>
          Fandom <MdArrowDropDown />
        </p>
        <p>
          Share <MdArrowDropDown />
        </p>
      </SecondNav>

      <Main>
        <SectionImg>
          <ImgPoster alt="" src={`${URL_IMAGE}${data.poster_path}`} />

          <DivImagePoster>
            <ImgDrop alt="" src={`${URL_IMAGE}${data.backdrop_path}`} />
            <DivOpacity></DivOpacity>
          </DivImagePoster>

          <SectionDescription>
            <h3>
              {data.original_title} - <span>( {data.release_date} )</span>
            </h3>
            <button onClick={openTrailer}>
              <IconTrailer /> Ver trailer
            </button>
          </SectionDescription>

          <ContainerTrailer value={getTrailer}>
            <ClosedTrailer onClick={closedTrailer} />
            <SectionTrailer>
              {!getTrailer ? "" : <YouTube videoId={setVideo} />}
            </SectionTrailer>
          </ContainerTrailer>

          <OverView>{data.overview}</OverView>
        </SectionImg>
      </Main>
    </>
  );
};

export default Description;
