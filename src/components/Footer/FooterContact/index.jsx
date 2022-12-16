import React from 'react'
import { useTranslation } from 'react-i18next'
import CommonBtn from '../../common/CommonBtn';
import ModalCommon from '../../common/Modal/Modal';
import {Wrapper , Contact} from "./styled-index"
import CommonInput from '../../common/CommonInput';
function FooterContact() {
    const {t , i18n} = useTranslation();
    const handleOpen = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
  return (
    <Wrapper>
            <h2>{t("Footer.0")}</h2>
            <CommonBtn onClick={handleOpen} style={{width: "364px" , fontSize: "28px" , fontWeight:"500" , marginBottom:"86px"}}>{t("Footer.1")}</CommonBtn>
            <ModalCommon  handleClose={handleClose} open={open}>
                <Contact>
                <h3>{t("ContactModal.0")}</h3>
                <h4>{t("ContactModal.1")}</h4>
                <CommonInput title={t("ContactModal.2")} placeholder={t("ContactModal.3")}/> 
                <CommonInput title={t("ContactModal.4")} placeholder={t("+99 891")}/>
                <CommonBtn style={{marginTop : "54px" , width:"324px"}}>{t("Footer.1")}</CommonBtn>
                </Contact>
        </ModalCommon>
    </Wrapper>
  )
}

export default FooterContact