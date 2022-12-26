import React, { useState } from "react";
import CommonHero from "../../common/CommonHero/index";
import hero from "../../../assets/image/hero.png";
import { useTranslation } from "react-i18next";
import ModalCommon from "../../common/Modal/Modal";
import CommonInput from "../../common/CommonInput";
import CommonBtn from "../../common/CommonBtn";
import {
  ModalBody,
  ModalHeader,
  Form,
} from "../../HomeComponent/Hero/styled-index";

const AboutUsHero = () => {
  const [bg, setBg] = useState(hero);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CommonHero
        bg={bg}
        title2={t("AboutUs.0")}
        btnText={t("Hero.3")}
        isTitle={true}
        isButton={true}
        setOpen={handleOpen}
        isIcon={true}
        style={{ padding: "16px 0", height: '80vh' }}
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
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.6")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.7")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.8")}</label>
              </div>
            </div>

            <div className="radio-wrapper">
              <h4>{t("HeroModal.9")}</h4>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.10")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.11")}</label>
              </div>
            </div>

            <div className="radio-wrapper">
              <h4>{t("HeroModal.12")}</h4>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.13")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.14")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.15")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label>{t("HeroModal.16")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
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
            <div
              style={{ width: "100%", display: "flex", justifyContent: 'center' }}
            >
              <CommonBtn type={"submit"}>{t("HeroModal.20")}</CommonBtn>
            </div>
          </Form>
        </ModalBody>
      </ModalCommon>
    </>
  );
};

export default AboutUsHero;
