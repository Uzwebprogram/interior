import React, { useState } from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { Section } from "./styled-index";
import { WrapperContainer } from "../../../style-App";
import "./styled.css";

// Mui tabs import
import { Tabs } from "antd";
// Mui tabs import end

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography sx={{ height: "100%" }}>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

const OurProject = () => {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const [tabPosition, setTabPosition] = useState("right");
  // const changeTabPosition = (e) => {
  //   setTabPosition(e.target.value);
  // };
  const { t, i18n } = useTranslation();
  return (
    <>
      <Section>
        <WrapperContainer>
          <Row className="row">
            <Col lg={12} md={12} className="col">
              <h2>{t("OurProject.0")}</h2>
              <Tabs
                tabPosition={tabPosition}
                items={new Array(8).fill(null).map((_, i) => {
                  const id = String(i + 1);
                  return {
                    label: `${t("OurProject.0")}`,
                    key: id,
                    children: (
                      <>
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/y7_Spedf2BI"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </>
                    ),
                  };
                })}
              />
            </Col>
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default OurProject;
