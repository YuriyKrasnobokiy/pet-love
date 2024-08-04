import {
  HomeContainer,
  HomeDescr,
  HomeImgStyled,
  HomeText,
  HomeTextAccent,
  HomeTextCont,
} from "./Home.styled";
import HomeImg from "../../assets/imgs/mobile/home-img-2x-mob.jpg";
import HomeImgTabl from "../../assets/imgs/tablet/home-img-2x-tablet.jpg";
import HomeImgDesk from "../../assets/imgs/desctop/home-img-2x-desc.jpg";
import { useEffect } from "react";
import { refresh } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { useDeviceType } from "../../hooks/useDeviceType";
import { selectUser } from "../../redux/auth/authSelectors";

const Home = () => {
  const dispatch = useDispatch();
  const deviceType = useDeviceType();
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (!currentUser.name) return;
    dispatch(refresh());
  }, [dispatch, currentUser]);

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
        {deviceType === "desktop" ? (
          <HomeImgStyled src={HomeImgDesk} alt="pet" />
        ) : deviceType === "tablet" ? (
          <HomeImgStyled src={HomeImgTabl} alt="pet" />
        ) : (
          <HomeImgStyled src={HomeImg} alt="pet" />
        )}
      </div>
    </HomeContainer>
  );
};

export default Home;
