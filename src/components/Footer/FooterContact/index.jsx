import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper, Contact } from "./styled-index";
import CommonInput from "../../common/CommonInput";
import { PostContact } from "../../../redux/contact";
import { useDispatch, useSelector } from "react-redux";
function FooterContact() {
  const { t, i18n } = useTranslation();
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const Name = useRef();
  const Number = useRef();
  const addContact = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const HendelSubmit = (e) => {
    e.preventDefault();
    console.log("okey");
    const contact_name = Name.current.value;
    const phone_number = Number.current.value;
    dispatch(PostContact({ contact_name, phone_number }));
  };
  return (
    <Wrapper>
      <h2>{t("Footer.0")}</h2>
      <CommonBtn
        onClick={handleOpen}
        style={{
          width: "364px",
          fontSize: "28px",
          fontWeight: "500",
          marginBottom: "86px",
        }}
      >
        {t("Footer.1")}
      </CommonBtn>
      <ModalCommon handleClose={handleClose} open={open}>
        <Contact onSubmit={HendelSubmit}>
          <h3>{t("ContactModal.0")}</h3>
          <h4>{t("ContactModal.1")}</h4>
          <label htmlFor="name">{t("ContactModal.2")}</label>
          <input placeholder={t("ContactModal.3")} ref={Name} />
          <label htmlFor="number">{t("ContactModal.4")}</label>
          <input placeholder={t("+99 891")} ref={Number} />
          <CommonBtn
            type="submit"
            style={{ marginTop: "54px", width: "324px" }}
          >
            {t("Footer.1")}
          </CommonBtn>
        </Contact>
      </ModalCommon>
    </Wrapper>
  );
}

export default FooterContact;
