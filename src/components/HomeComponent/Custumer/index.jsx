import React from "react";
import { WrapperContainer } from "../../../style-App";
import { Section } from "./styled-index";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
// import { Swiper, SwiperSlide, } from "swiper/react";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
  return (
    <>
      <Section>
        <WrapperContainer>
          <div className="slider-wrapper">
            <h2>{t("Custumer.0")}</h2>
            <Slider {...settings}>
              {arr.map(() => (
                <div className="slider-item">
                  <div className="slider-content">
                    <h3>{t("Custumer.1")}</h3>
                    <div className="iframe">
                      <iframe
                        width="100%"
                        height="266"
                        src="https://www.youtube.com/embed/y7_Spedf2BI"
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
