import {Section} from "./styled-index"
import BgVideo from "./../../assets/video/superstudio_bg.mp4"
import {Row , Col} from "react-grid-system"
import { WrapperContainer } from "../../style-App"
function PortfolioComponent() {
    return(
        <Section>
            <div className="Videos">
            <video src={BgVideo} autoPlay loop muted className="video"></video>
            </div>
                <WrapperContainer>
                <Row className="CardsContainer">
                    <Col className="card" lg={6} md={12}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SQR3gbae29Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>небольшое описание</h3>
                    </Col>
                    <Col className="card" lg={6} md={12}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SQR3gbae29Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>небольшое описание</h3>
                    </Col>
                    <Col className="card" lg={6} md={12}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SQR3gbae29Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>небольшое описание</h3>
                    </Col>
                    <Col className="card" lg={6} md={12}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SQR3gbae29Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>небольшое описание</h3>
                    </Col>
                </Row>
                </WrapperContainer>
        </Section>
    )
}
export default PortfolioComponent