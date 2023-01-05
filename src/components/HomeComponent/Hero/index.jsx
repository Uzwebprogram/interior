import { useRef, useState } from "react";
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
import heroBg from "../../../assets/home/home-hero.jpg";
import { useDispatch } from "react-redux";
import { PostCalculate } from "../../../redux/calculate";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Name = useRef();
  const Number = useRef();
  const [type, setType] = useState("");
  const [Htype, setHtype] = useState("");
  const [Rtype, setEtype] = useState("");
  const descrip = useRef();
  const [bg, setBg] = useState(heroBg);
  const HendelChange = (e) => {
    let Value = e.target.value
    setType(Value);
  };
  const HendelChange1 = (e) => {
    let Value1 = e.target.value
    setHtype(Value1);
  };
  const HendelChange2 = (e) => {
    let Value2 = e.target.value
    setEtype(Value2);
  };
  const dispatch = useDispatch();
  const HendelSubmit = (e) => {
    e.preventDefault();
    const calculate_name = Name.current.value;
    const phone_number = Number.current.value;
    const room_type = type;
    const house_type = Htype;
    const room_area = Rtype;
    const coment = descrip.current.value
    dispatch(PostCalculate({calculate_name , phone_number , room_type , house_type , room_area , coment}))
  };
  return (
    <>
      <CommonHero
        title1={t("Hero.0")}
        title2={t("Hero.1")}
        text={t("AboutUs.1")}
        btnText={t("Hero.3")}
        setOpen={handleOpen}
        isTitle={true}
        styleSection={{ padding: "192px 0px" }}
        isButton={true}
        isIcon={true}
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
          <Form onSubmit={HendelSubmit}>
            <label className="labelInput" htmlFor="name">{t("HeroModal.2")}</label>
            <input
              placeholder={t("HeroModal.3")}
              type={"text"}
              ref={Name}
            />
            <label className="labelInput" htmlFor="number">{t("HeroModal.4")}</label>
            <input
              placeholder={"+998 90 000 00 00"}
              type={"tel"}
              ref={Number}
            />
            <div className="radio-wrapper" onChange={HendelChange}>
              <h4>{t("HeroModal.5")}</h4>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html1"
                  name="fav_language1"
                  value="Дом"
                />
                <label>{t("HeroModal.6")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html1"
                  name="fav_language1"
                  value="Квартира"
                />
                <label>{t("HeroModal.7")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html1"
                  name="fav_language1"
                  value="Коммерческий объект"
                />
                <label>{t("HeroModal.8")}</label>
              </div>
            </div>

            <div className="radio-wrapper" onChange={HendelChange1}>
              <h4>{t("HeroModal.9")}</h4>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html2"
                  name="fav_language2"
                  value="Новостройка"
                />
                <label>{t("HeroModal.10")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html2"
                  name="fav_language2"
                  value="Вторичное жильё"
                />
                <label>{t("HeroModal.11")}</label>
              </div>
            </div>

            <div className="radio-wrapper" onChange={HendelChange2}>
              <h4>{t("HeroModal.12")}</h4>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html3"
                  name="fav_language3"
                  value="до 50 кв.м"
                />
                <label>{t("HeroModal.13")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html3"
                  name="fav_language3"
                  value="до 100 кв.м"
                />
                <label>{t("HeroModal.14")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html3"
                  name="fav_language3"
                  value="до 250 кв.м"
                />
                <label>{t("HeroModal.15")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html3"
                  name="fav_language3"
                  value="до 500 кв.м"
                />
                <label>{t("HeroModal.16")}</label>
              </div>
              <div className="radioGruop">
                <input
                  type="radio"
                  id="html3"
                  name="fav_language3"
                  value="более 500 кв.м"
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
                ref={descrip}
              ></textarea>
            </div>
            <CommonBtn type={"submit"}>{t("HeroModal.20")}</CommonBtn>
          </Form>
        </ModalBody>
      </ModalCommon>
    </>
  );
};

export default Hero;
