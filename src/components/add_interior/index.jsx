import React from "react";
import { Wrapper, RowDiv } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import Img1 from "../../assets/image/addinterior/komp.png";
import Img2 from "../../assets/image/addinterior/kon.jpg";
import Img3 from "../../assets/image/addinterior/plan.jpg";
import Pdf1 from "../../assets/pdf/mini.pdf";
import Pdf2 from "../../assets/pdf/exs.pdf";
import Pdf3 from "../../assets/pdf/exx.pdf";
import Pdf4 from "../../assets/pdf/pol.pdf";
import Pdf5 from "../../assets/pdf/luxouse-about.pdf"
import TopImg1  from "./.../../../../assets/image/addinterior/Лист-1 Мини пакет.jpg"
import TopImg2  from "./.../../../../assets/image/addinterior/Лист-2 экспресс пакет.jpg"
import TopImg3  from "./.../../../../assets/image/addinterior/Лист-3 эскизный пакет .jpg"
import TopImg4  from "./.../../../../assets/image/addinterior/Лист-4 польный пакет .png"
function AddInteriorComponent() {
  const data = [1, 2, 3, 4];
  const { t, i18n } = useTranslation();
  return (
    <Wrapper>
      <h2>{t("add_interior.0")}</h2>
      <Row component={RowDiv}>
        <Col lg={3} md={12} className="ContainerCard">
          <img
            src={TopImg1}
            alt=""
          />
          <h3>{t("add_interior.2")}</h3>
          <ul>
            <li>{t("add_interior.3")}</li>
            <hr />
            <li>{t("add_interior.4")}</li>
            <hr />
            <li>{t("add_interior.5")}</li>
            <hr />
            <li>{t("add_interior.6")}</li>
            <hr />

            <li>
              <h4 className="h4two">___________</h4>
            </li>
          </ul>
          <button>
            <a href={Pdf1} download="МИНИ ПАКЕТ">
              {t("add_interior.29")}
            </a>
          </button>
        </Col>
        <Col lg={3} md={12} className="ContainerCard">
          <img
                       src={TopImg2}
            alt=""
          />
          <h3>{t("add_interior.8")}</h3>
          <ul>
            <li>{t("add_interior.9")}</li>
            <hr />
            <li>{t("add_interior.10")}</li>
            <hr />
            <li>{t("add_interior.11")}</li>
            <hr />

            <li>
              <h4 className="h4one">______________</h4>
            </li>
          </ul>
          <button>
          <a href={Pdf2} download="ЭКСПРЕСС ПАКЕТ">
              {t("add_interior.29")}
            </a>
          </button>
        </Col>
        <Col lg={3} md={12} className="ContainerCard">
          <img
             src={TopImg3}
             height={206}
            alt=""
          />
          <h3>{t("add_interior.13")}</h3>
          <ul>
            <li>{t("add_interior.14")}</li>
            <hr />
            <li>{t("add_interior.15")}</li>
            <hr />
            <li>{t("add_interior.16")}</li>
            <hr />
            <li>{t("add_interior.17")}</li>
            <hr />
            <li>{t("add_interior.18")}</li>
            <hr />
            <li>{t("add_interior.19")}</li>
            <hr />

          </ul>
          <button>
          <a href={Pdf3} download="ЭСКИЗНЫЙ ПАКЕТ">
              {t("add_interior.29")}
            </a>
          </button>
        </Col>
        <Col lg={3} md={12} className="ContainerCard">
          <img
             src={TopImg4}
            alt=""
          />
          <h3>{t("add_interior.21")}</h3>
          <ul>
            <li>{t("add_interior.22")}</li>
            <hr />
            <li>{t("add_interior.23")}</li>
            <hr />
            <li>{t("add_interior.24")}</li>
            <hr />
            <li>{t("add_interior.25")}</li>
            <hr />
            <li>{t("add_interior.26")}</li>
            <hr />
            <li>{t("add_interior.27")}</li>
            <hr />
            <li>
              <h4 className="h4three">____________</h4>
            </li>
          </ul>
          <button>
            <a href={Pdf4} download="ПОЛНЫЙ ПАКЕТ">
              {t("add_interior.29")}
            </a>
          </button>
        </Col>
      </Row>
      <h2>{t("add_interior.1")}</h2>
      <Row component={RowDiv}>
        <Col className="Card" lg={4} md={12}>
          <p className="padding-top">{t("AddInterior.2")}</p>
          <img height={300} src={Img3} alt="" />
          <p className="padding-bottom">  <a download={"подробнее"} href={Pdf5}>подробнее</a></p>
        </Col>
        <Col className="Card" lg={4} md={12}>
          <p className="padding-top">{t("AddInterior.3")}</p>
          <img height={300} src={Img1} alt="" />
          <p className="padding-bottom">  <a download={"подробнее"} href={Pdf5}>подробнее</a></p>

        </Col>
        <Col className="Card" lg={4} md={12}>
          <p className="padding-top">{t("AddInterior.4")}</p>
          <img height={300} src={Img2} alt="" />
          <p className="padding-bottom">  <a download={"подробнее"} href={Pdf5}>подробнее</a></p>

        </Col>
      </Row>
    </Wrapper>
  );
}

export default AddInteriorComponent;
