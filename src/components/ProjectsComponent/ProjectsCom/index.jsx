import React from "react";
import { Section, BeforeContainer } from "./styled-index";
import { Row, Col } from "react-grid-system";
import TwentyTwenty from "react-twentytwenty"
import "./twentytwenty.css";

import After from "../../../assets/image/after.png";
import Before from "../../../assets/image/hero.png";
const arr = [1, 2, 3, 4];
const ProjectsCom = () => {
  return (
    <>
      <Section>
        <BeforeContainer>
          <Row className="row">
            {arr.map(() => (
              <Col lg={12} md={12} sm={12} className='big-col'>
                <Row className="small-row">
                  <Col className="col" lg={9} md={12} sm={12} sx={12}>
                    <TwentyTwenty
                      className="twenty"
                      left={<img className="twenty-img" src={After} width="100%" height="557px" />}
                      right={<img src={Before} className="twenty-img" width="100%" height="557px" />}
                      slider={<div className="slider" />}
                      minDistanceToBeginInteraction={15}
                    />
                  </Col>
                  <Col className="white-col" lg={3} md={12} sm={12} sx={12}>
                    <div className="col-content">
                      <h3>Akvamarin</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit magni inventore repellat at, nam eos
                        nesciunt, asperiores, sit beatae molestias commodi
                        ratione quibusdam atque obcaecati excepturi maiores!
                        Natus,
                      </p>
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
