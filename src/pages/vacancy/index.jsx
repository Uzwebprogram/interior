import { useTranslation } from "react-i18next"
import {WrapperContainer} from "./../../style-App"
import { Wrapper } from "./styled-index"
import {Row , Col} from "react-grid-system"
function Vacancy() {
    const {t , i18n} = useTranslation();
  return (
    <WrapperContainer>
        <Wrapper>
      <h2>{t("Vacancy.0")}</h2>
        <Row>
      
                 <Col lg={4} md={12} >
                <div className="Card">
                <div className="top">                
                <p>Interior design</p>
                <span>26.09.2022</span>
                </div>
                <p>Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения</p>
                </div>
                <button><a href="">Заполнить анкету</a></button>
            </Col>
            <Col lg={4} md={12} >
                <div className="Card">
                <div className="top">                
                <p>Interior design</p>
                <span>26.09.2022</span>
                </div>
                <p>Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения</p>
                </div>
                <button><a href="">Заполнить анкету</a></button>
            </Col>
            <Col lg={4} md={12} >
                <div className="Card">
                <div className="top">                
                <p>Interior design</p>
                <span>26.09.2022</span>
                </div>
                <p>Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения</p>
                </div>
                <button><a href="">Заполнить анкету</a></button>
            </Col>
            <Col lg={4} md={12} >
                <div className="Card">
                <div className="top">                
                <p>Interior design</p>
                <span>26.09.2022</span>
                </div>
                <p>Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения</p>
                </div>
                <button><a href="">Заполнить анкету</a></button>
            </Col>
            <Col lg={4} md={12} >
                <div className="Card">
                <div className="top">                
                <p>Interior design</p>
                <span>26.09.2022</span>
                </div>
                <p>Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения</p>
                </div>
                <button><a href="">Заполнить анкету</a></button>
            </Col>
            <Col lg={4} md={12} >
                <div className="Card">
                <div className="top">                
                <p>Interior design</p>
                <span>26.09.2022</span>
                </div>
                <p>Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения Правила проживания в отеле являются общими и могут меняться в зависимости от выбранного типа размещения</p>
                </div>
                <button><a href="">Заполнить анкету</a></button>
            </Col>
        </Row>
        </Wrapper>
    </WrapperContainer>
  )
}

export default Vacancy