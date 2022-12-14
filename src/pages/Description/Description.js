import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import YouTube from "react-youtube";
import Credits from "../../components/Credits/Credits";
import AllCredits from "../../components/Credits/AllCredits";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
import ImageMovie from "../../components/ImageMovie/ImageMovie";
import { useReactQuery } from "../../Hooks/useReactQuery";
import Recomendations from "../../components/Recomendations/Recomendations";

const SecondNav = styled.nav`
  height: auto;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f4c71;
  color: white;
  font-family: "Roboto", sans-serif;
  width: 100vw;

  p {
    margin: 5px;
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
  z-index: 200;

  @media (min-width: 780px) {
    height: 270px;
  }
  @media (min-width: 1080px) {
    height: 480px;
  }
  @media (min-width: 1380px) {
    height: 480px;
  }
`;

const ImgPoster = styled.img`
  width: 250px;
  height: 300px;
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 500;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.665);

  @media (min-width: 1080px) {
    width: 30%;
    top: 20px;
    height: 340px;
  }
  @media (min-width: 1380px) {
    width: 25%;
    top: 20px;
    height: 380px;
  }
`;

const SectionImg = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: #1f1f1f;
  color: white;

  @media (min-width: 780px) {
    width: 780px;
    display: flex;
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
    height: 480px;
  }
  @media (min-width: 1380px) {
    height: 480px;
  }
`;

const SectionDescription = styled.section`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  h3 {
    display: flex;
    font-family: "Roboto", sans-serif;
    align-items: center;
    font-size: 24px;
    margin-left: 10px;

    span {
      margin-left: 5px;
      font-size: 18px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px 10px 10px;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    color: black;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    background-color: white;
    border: 1px solid black;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 18px;
      font-weight: bold;
    }

    div {
      width: max-content;
      margin-left: 30px;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      font-family: "Roboto", sans-serif;
      background-color: #1f4c71;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  @media (min-width: 1080px) {
    position: absolute;
    top: 15px;
    width: max-content;
    left: 400px;
    margin: 0 auto;
  }
`;

const ContainerTrailer = styled.section`
  position: fixed;
  top: 0px;
  left: 0px;
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
  @media (min-width: 1080px) {
    cursor: pointer;
  }
`;

const SectionTrailer = styled.section`
  height: 100vh;
  width: 100%;
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
  margin: 10px auto;
  padding: 10px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;

  @media (min-width: 1080px) {
    position: absolute;
    top: 100px;
    left: 400px;
    width: 600px;
  }
`;

const ColorStar = styled(AiFillStar)`
  color: yellow;
`;

const SectionGenre = styled.section`
  display: flex;
  width: max-content;
  align-items: center;
  text-align: center;

  p {
    margin: 10px;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }

  hr {
    width: 10px;
  }

  @media (min-width: 1080px) {
    position: absolute;
    margin-top: 60px;
    left: 650px;
  }
`;

const Description = () => {
  const [setVideo, setSetVideo] = useState("");
  const [getTrailer, setGetTrailer] = useState(false);

  let { id } = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&append_to_response=videos`;
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const { data, status } = useReactQuery(`${API_URL}`, id);

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  const numerOne = Number.parseFloat(data.vote_average).toFixed(1);

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

  const opts = {
    width: "450",
    height: "450",
  };

  return (
    <>
      {/* <Nav /> */}

      <SecondNav>
        <p>
          OverView <MdArrowDropDown />{" "}
        </p>
        <p>
          Media <MdArrowDropDown />{" "}
        </p>
        <p>
          Fandom <MdArrowDropDown />{" "}
        </p>
        <p>
          Share <MdArrowDropDown />{" "}
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
            <h3>{data.original_title}</h3>

            <div>
              <button onClick={openTrailer}>
                <IconTrailer /> Ver trailer
              </button>

              <div>
                <p>{numerOne}</p>
                <ColorStar />
              </div>
            </div>
          </SectionDescription>

          <SectionGenre>
            {data.genres.map((gen) => (
              <section key={gen.id}>
                <p>{gen.name}</p>
              </section>
            ))}
          </SectionGenre>

          <OverView>{data.overview}</OverView>

          <Credits />
        </SectionImg>

        <AllCredits />
        <Reviews />
        <ImageMovie />
        <Recomendations/>
      </Main>
      <ContainerTrailer value={getTrailer}>
        <ClosedTrailer onClick={closedTrailer} />
        <SectionTrailer>
          {!getTrailer ? "" : <YouTube videoId={setVideo} opts={opts} />}
        </SectionTrailer>
      </ContainerTrailer>
      <Footer />
    </>
  );
};

export default Description;
