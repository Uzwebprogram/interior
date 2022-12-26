import React from "react";
import { Section, BeforeContainer } from "./styled-index";
import { Row, Col } from "react-grid-system";
import TwentyTwenty from "react-twentytwenty"
import "./twentytwenty.css";

import After from "../../../assets/image/after.png";
import Before from "../../../assets/image/hero.png";
import icons1 from "../../../assets/image/beforeVSafter/icons1.png";
import SkeletonCommon from "../../common/Skeleton";
const arr = [1, 2, 3, 4];
const ProjectsCom = () => {
  return (
    <>
      <Section>
        
        <BeforeContainer>
          <Row className="row">
            {arr.map(() => (
              <Col lg={12} md={12} sm={12} className="big-col">
                <Row className="small-row">
                  <Col className="col" lg={9} md={12} sm={12} sx={12}>
                    <TwentyTwenty
                      className="twenty"
                      left={
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img
                          className="twenty-img"
                          src={After}
                          width="100%"
                          height="557px"
                        />
                      }
                      right={
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img
                          src={Before}
                          className="twenty-img"
                          width="100%"
                          height="557px"
                        />
                      }
                      slider={<div className="slider" />}
                      minDistanceToBeginInteraction={15}
                    />
                  </Col>
                  <Col className="white-col" lg={3} md={12} sm={12} sx={12}>
                    <div className="col-content">
                      <h3>АКВАМАРИН</h3>
                      <p>
                        Дизайнеры нашей студии оформили квартиру в башне
                        «Федерация», Москва-Сити, Москва. Подробнее о проекте
                      </p>
                      <img src={icons1} alt="image" />
                    </div>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </BeforeContainer>
      </Section>
    </>
  );
};

export default ProjectsCom;
