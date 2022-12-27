import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { WrapperContainer } from "./../../style-App";
import { Wrapper } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import { GetVacancy } from "../../redux/vacancy/index";
function Vacancy() {
  const { t, i18n } = useTranslation();
  const getVacancy = useSelector((state) => state.vacancy.getVacancy?.Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetVacancy());
  }, []);
// format date api function
  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  };
  // format date api function
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <WrapperContainer>
      <Wrapper>
        <h2>{t("Vacancy.0")}</h2>
        <Row>
          {getVacancy.map((elem, index) => (
            <Col lg={4} md={12}>
              <div className="Card">
                <div className="top">
                  <p>
                    {LangVal() == "ru" ? (
                      <p>{elem.vakancy_title_ru}</p>
                    ) : LangVal() == "uz" ? (
                      <p>{elem.vakancy_title_uz}</p>
                    ) : LangVal() == "en" ? (
                      <p>{elem.vakancy_title_en}</p>
                    ) : (
                      <p>{elem.vakancy_title_ru}</p>
                    )}
                  </p>
                  <span>{DateFormat(elem.date)}</span>
                </div>
                <p>
                  {LangVal() == "ru" ? (
                    <p>{elem.vakancy_description_ru}</p>
                  ) : LangVal() == "uz" ? (
                    <p>{elem.vakancy_description_uz}</p>
                  ) : LangVal() == "en" ? (
                    <p>{elem.vakancy_description_en}</p>
                  ) : (
                    <p>{elem.vakancy_description_uz}</p>
                  )}
                </p>
              </div>
              <button>
                <a href="">Заполнить анкету</a>
              </button>
            </Col>
          ))}
        </Row>
      </Wrapper>
    </WrapperContainer>
  );
}

export default Vacancy;
