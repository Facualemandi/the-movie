import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useReactQuery } from "../../Hooks/useReactQuery";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import MovieCredits from "../../components/MovieCreditsPerson/MovieCredits";
import Footer from "../../components/Footer/Footer";
import MoviesPerson from "../../components/MoviesPerson/MoviesPerson";


const Main = styled.main`
width: 100vw;
display: flex;
flex-direction: column;
margin: auto;
@media (min-width: 780px){
   width: 780px;
}
@media (min-width: 1080px){
   width: 1080px;
}
@media (min-width: 1380px){
   width: 1380px;
}
`
const Img = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  margin: auto;
  margin-left: 10px;
  @media (max-width: 360px) {
    margin: auto;
  }
`;

const Key = styled.p`
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
`;
const Value = styled.p`
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
`;

const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  margin: 10px;
  margin-bottom: 20px;
`;
const H3 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  margin: 10px;
  margin-bottom: 15px;
`;

const ContainerPerson = styled.section`
  display: flex;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

const SectionPictureRedes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Facebook = styled(FaFacebookSquare)`
  margin: 15px;
  width: 35px;
  height: 35px;
`;
const Twitter = styled(FaTwitterSquare)`
  margin: 15px;
  width: 35px;
  height: 35px;
`;
const Instagram = styled(FaInstagramSquare)`
  margin: 15px;
  width: 35px;
  height: 35px;
`;
const Biography = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 10px;
`;

const Person = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const URL_FACEBOOK = "https://www.facebook.com/";
  const URL_TWITTER = "https://twitter.com/";
  const URL_INSTAGRAM = "https://www.instagram.com/";

  const { id, name } = useParams();
  const API_URL = `https://api.themoviedb.org/3/person/${id}?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295`;
  const { data, status } = useReactQuery(`${API_URL}`, name);

  if (status === "loading") {
    return <p>Cargando</p>;
  }

  return (
    <>
      <Main>
        <ContainerPerson>
          <SectionPictureRedes>
            <Img alt={data.name} src={`${URL_IMAGE}${data.profile_path}`} />
            <div>
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </SectionPictureRedes>
          <div>
            <H2>{data.name}</H2>
            <H3>Personal Info</H3>
            <Key>Know For</Key>
            <Value>{data.known_for_department}</Value>
            <Key>Gender</Key>
            <Value>{data.gender === 1 ? "Female" : "Male"}</Value>
            <Key>Birthday</Key>
            <Value>{data.birthday}</Value>
            <Key>Place of Birth</Key>
            <Value>{data.place_of_birth}</Value>
            {/* <Key>Also known as</Key>
            <Value>{data.also_known_as}</Value> */}
          </div>
        </ContainerPerson>
        <Biography>{data.biography}</Biography>

        <MovieCredits/>
        <MoviesPerson/>
        <Footer/>
      </Main>
    </>
  );
};

export default Person;
