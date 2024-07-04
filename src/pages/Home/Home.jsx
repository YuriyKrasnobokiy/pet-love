import {
  HomeContainer,
  HomeDescr,
  HomeImgStyled,
  HomeText,
  HomeTextAccent,
  HomeTextCont,
} from "./Home.styled";
import HomeImg from "../../assets/imgs/mobile/home-img-2x-mob.jpg";

const Home = () => {
  return (
    <HomeContainer className="container">
      <HomeTextCont>
        <HomeText>
          Take good <HomeTextAccent>care</HomeTextAccent> of your small pets
        </HomeText>
        <HomeDescr>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </HomeDescr>
      </HomeTextCont>
      <div>
        <HomeImgStyled src={HomeImg} alt="pet" />
      </div>
    </HomeContainer>
  );
};

export default Home;
