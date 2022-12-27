import React, { useEffect } from "react";
import { WrapperContainer } from "../../../style-App";
import { Section } from "./styled-index";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomer } from "../../../redux/customers";
// import { Swiper, SwiperSlide, } from "swiper/react";
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Custumer = () => {
  const { t, i18n } = useTranslation();
  const getCustomer = useSelector((state) => state.customer.getCustomer?.Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCustomer());
  }, []);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <>
      <Section>
        <WrapperContainer>
          <div className="slider-wrapper">
            <h2>{t("Custumer.0")}</h2>
            <Slider {...settings}>
              {getCustomer.map((elem, index) => (
                <div className="slider-item" key={index}>
                  <div className="slider-content">
                    {LangVal() == "ru" ? (
                      <h3>{elem.client_text_ru}</h3>
                    ) : LangVal() == "uz" ? (
                      <h3>{elem.client_text_uz}</h3>
                    ) : LangVal() == "en" ? (
                      <h3>{elem.client_text_en}</h3>
                    ) : (
                      <h3>{elem.client_text_ru}</h3>
                    )}
                    <div className="iframe">
                      <iframe
                        width="100%"
                        height="266"
                        src={elem.client_video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default Custumer;
