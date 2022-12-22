import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bg, setBg] = useState(heroBg);
  return (
    <>
      <CommonHero
        title1={t("Hero.0")}
        title2={t("Hero.1")}
        text={t("Hero.2")}
        btnText={t("Hero.3")}
        setOpen={handleOpen}
        isTitle={true}
        isButton={true}
        bg={bg}
      />
      
      <ModalCommon
        width={"auto"}
        height={450}
        handleClose={handleClose}
        open={open}
      >
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
            <div className="radio-wrapper">
              
              <h4>{t("HeroModal.5")}</h4>

              <div className="radioGruop">
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.6")}</label>
              </div>
              <div className="radioGruop">
                 <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.7")}</label>
              </div>
              <div className="radioGruop">
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.8")}</label>
              </div>
             
            </div>

            <div className="radio-wrapper">
              <h4>{t("HeroModal.9")}</h4>
              <div className="radioGruop">
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.10")}</label>
              </div>
              <div className="radioGruop">
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.11")}</label>
              </div>
            </div>

            <div className="radio-wrapper">
              <h4>{t("HeroModal.12")}</h4>
              <div className="radioGruop">
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.13")}</label>
              </div>
              <div className="radioGruop">
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.14")}</label>
              </div>
              <div className="radioGruop">
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.15")}</label>
              </div>
              <div className="radioGruop">
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.16")}</label>
              </div>
              <div className="radioGruop">
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label>{t("HeroModal.17")}</label>
              </div>
            </div>
            <div className="radio-wrapper">
              <h4>{t("HeroModal.18")}</h4>
              <textarea
                width="100%"
                cols="30"
                rows="5"
                placeholder={t("HeroModal.18")}
              ></textarea>
            </div>
          </Form>
        </ModalBody>
      </ModalCommon>
    </>
  );
};

export default Hero;
