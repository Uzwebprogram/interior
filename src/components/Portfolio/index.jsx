import { Section } from "./styled-index";
import { useEffect } from "react";
import BgVideo from "./../../assets/video/superstudio_bg.mp4";
import { Row, Col } from "react-grid-system";
import { WrapperContainer } from "../../style-App";
import { GetYoutube } from "../../redux/youtube/index";
import { useDispatch, useSelector } from "react-redux";
function PortfolioComponent() {
  const getYoutube = useSelector((state) => state.youtube.getYoutube?.Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetYoutube());
  }, []);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <Section>
      <div className="Videos">
        <video src={BgVideo} autoPlay loop muted className="video"></video>
      </div>
      <WrapperContainer>
        <Row className="CardsContainer">
          {getYoutube.map((elem, index) => (
            <Col className="card" lg={6} md={12}>
              <iframe
                width="100%"
                height="315"
                src={elem.tube_video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>
                {" "}
                {LangVal() == "ru" ? (
                  <h3>{elem.tube_title_ru}</h3>
                ) : LangVal() == "uz" ? (
                  <h3>{elem.tube_title_uz}</h3>
                ) : LangVal() == "en" ? (
                  <h3>{elem.tube_title_en}</h3>
                ) : (
                  <h3>{elem.tube_title_ru}</h3>
                )}
              </h3>
            </Col>
          ))}
        </Row>
      </WrapperContainer>
    </Section>
  );
}
export default PortfolioComponent;
