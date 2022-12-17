import React, { useState } from "react";
import { WrapperContainer } from "../../../style-App";
import {
  Section,
  ColItem,
  RowWrap,
  ModalHeader,
  ModalBody,
  Form,
  InputControls,
} from "./styled-index";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import ModalCommon from "../../common/Modal/Modal";
import CommonBtn from "../../common/CommonBtn";
import CommonInput from "../../common/CommonInput";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CommonHero from "../../common/CommonHero";
import heroBg from "../../../assets/image/hero.png";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [bg, setBg] = useState(heroBg);
  return (
    <>
      <CommonHero
        title1={t("Hero.0")}
        title2={t("Hero.1")}
        text={t("Hero.2")}
        btnText={t("Hero.3")}
        setOpen={setOpen}
        isTitle={true}
        bg={bg}
      >
        <ModalCommon width={550} handleClose={handleClose} open={open}>
          <ModalHeader>
            <h2>{t("HeroModal.0")}</h2>
            <p>{t("HeroModal.1")}</p>
          </ModalHeader>
          <ModalBody>
            <Form>
              <CommonInput
                title={t("HeroModal.2")}
                placeholder={t("HeroModal.3")}
                type={"text"}
              />
              <CommonInput
                title={t("HeroModal.4")}
                placeholder={"+998 90 000 00 00"}
                type={"tel"}
              />

              <div className="">
                <h4>{t("HeroModal.5")}</h4>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={t("HeroModal.6")}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value={t("HeroModal.6")}
                      control={<Radio />}
                      label={t("HeroModal.6")}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Form>
          </ModalBody>
        </ModalCommon>
      </CommonHero>
    </>
  );
};

export default Hero;
