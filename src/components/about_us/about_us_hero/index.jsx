import React, { useState } from "react";
import CommonHero from "../../common/CommonHero/index";
import hero from "../../../assets/image/hero.png";
import { useTranslation } from "react-i18next";

const AboutUsHero = () => {
  const [bg, setBg] = useState(hero);
  const { t, i18n } = useTranslation();
  return (
    <>
      <CommonHero
        bg={bg}
        title2={t("AboutUs.0")}
        btnText={t("Hero.3")}
        isTitle={true}
        isButton={true}
        style={{padding: '16px 0'}}
      ></CommonHero>
    </>
  );
};

export default AboutUsHero;
