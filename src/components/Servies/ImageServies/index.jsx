import React, { useEffect } from "react";
import { Col, Row } from "react-grid-system";
import { Section, ServiesImgContainer } from "./styled-index";
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
            {DataImg.map((elem, index) => 
              elem.images.map((elemes,index) =>
              <>
                <Col key={index} className="col" lg={12} md={12} sx={12} sm={12}>
                  <img
                    className="col-img"
                    src={elemes.image}
                    alt="images"
                  />
                </Col>
              </>
                )
            )}
          </Row>
        </ServiesImgContainer>
      </Section>
    </>
  );
};

export default ImageServies;
