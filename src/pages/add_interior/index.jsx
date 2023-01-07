import { useState } from "react";
import { useTranslation } from "react-i18next";
import CommonHero from "../../components/common/CommonHero";
import BackgroundImage from "./../../assets/image/About/seal.jpg";
import { WrapperContainer } from "../../style-App";
import AddInteriorComponent from "../../components/add_interior";
function AddInterior() {
  const [bg, setBg] = useState(BackgroundImage);
  const { t, i18n } = useTranslation();
  return (
    <>
      <CommonHero
        bg={bg}
        style={{ padding: "260px 0 200px 0" }}
        isTitle={true}
        title2={t("AddInterior.1")}
        text={t("AddInterior.0")}
        isButton={true}
        isIcon={true}
        btnText={t("Hero.3")}
      />
      <WrapperContainer>
        <AddInteriorComponent />
      </WrapperContainer>
    </>
  );
}
export default AddInterior;
