import React from "react";
import { useTranslation } from "react-i18next";
import HomeComponent from "../../components/HomeComponent";
function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* {t("Header.0")} */}
      <HomeComponent />
    </>
  );
}

export default Home;
