import React, { useEffect } from "react";
import { Col, Row } from "react-grid-system";
import { Section, ServiesImgContainer } from "./styled-index";
import serviesBg from "../../../assets/image/servies/serviesBg.png";
import { useDispatch, useSelector } from "react-redux";
import { GetproductsId } from "../../../redux/about";

const ImageServies = () => {
  const DataImg = useSelector((state) => state.categories.getproductsid?.Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetproductsId(window.localStorage.getItem("MoreId")));
  }, []);
  return (
    <>
      <Section>
        <ServiesImgContainer>
          <Row className="row">
            {DataImg.map((elem, index) => (
              <>
                <Col className="col" lg={12} md={12} sx={12} sm={12}>
                  <img
                    className="col-img"
                    src={elem.product_img2}
                    alt="images"
                  />
                </Col>
                <Col className="col" lg={12} md={12} sx={12} sm={12}>
                  <img
                    className="col-img"
                    src={elem.product_img3}
                    alt="images"
                  />
                </Col>
                <Col className="col" lg={12} md={12} sx={12} sm={12}>
                  <img
                    className="col-img"
                    src={elem.product_img4}
                    alt="images"
                  />
                </Col>
              </>
            ))}
          </Row>
        </ServiesImgContainer>
      </Section>
    </>
  );
};

export default ImageServies;
