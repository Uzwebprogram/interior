import React from "react";
import { Col, Row } from "react-grid-system";
import { WrapperContainer } from "../../../style-App";
import { Section, TabDiv, BigTabs } from "./styled-index";
import { useTranslation } from "react-i18next";
import "./styled.css";

// Mui tabs import
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// Mui tabs import end

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ height: "100%" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const OurProject = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { t, i18n } = useTranslation();
  return (
    <>
      <Section>
        <WrapperContainer>
          <Row className="row">
            <Col lg={12} md={12} className="col">
              <h2>{t("OurProject.0")}</h2>
              <Box
                className="tabWrapper"
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  height: "90vh",
                }}
              >
                <Tabs
                  component={BigTabs}
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className="tabsWrap"
                  sx={{
                    width: "100%",
                    span: { width: "100%" },
                  }}
                >
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(0)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(1)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(2)}
                  />
                  <Tab
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(3)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(4)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(5)}
                  />
                  <Tab
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(6)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(7)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(8)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(9)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(10)}
                  />
                  <Tab 
                    component={TabDiv}
                    label={t("OurProject.0")}
                    {...a11yProps(11)}
                  />
                </Tabs>
                <TabPanel value={value} index={0} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={1} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={2} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={3} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={4} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={5} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={6} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={7} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={8} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={9} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={10} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
                <TabPanel value={value} index={11} className="tabpanel">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y7_Spedf2BI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </TabPanel>
              </Box>
            </Col>
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default OurProject;
