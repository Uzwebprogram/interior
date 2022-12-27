import React from 'react'
import { Wrapper, RowDiv } from './styled-index'
import {Row , Col} from "react-grid-system"
import { useTranslation } from 'react-i18next'
function AddInteriorComponent() {
    const data = [1 , 2, 3, 4]
    const {t , i18n} = useTranslation()
  return (
    <Wrapper>
        <h2>{t("add_interior.0")}</h2>
        <Row component={RowDiv}>
                {data.map((elem , index) => 
                
                <Col key={index} lg={3} md={12} className="ContainerCard">
                <img src="http://cdn.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg" alt="" />
                <h3>ЭКСПРЕСС-ПРОЕКТ</h3>
                <ul>
                    <li>срок от 4 недели</li>
                    <hr />
                    <li>6 детально проработанных чертежей для старта ремонта</li>
                    <hr />
                    <li>100% индивидуальный проект под ваш быт.</li>
                    <hr />
                    <li>Учитываем нормы согласования перепланировки</li>
                    <hr />
                    <li>Проект можем сделать удаленно, в любой точке мира</li>
                    <hr />
                    <li>Учитываем нормы согласования перепланировкии</li>
                    <hr />
                    <li>Проект можем сделать удаленно, в любой точке мира</li>
                    <hr />
                </ul>
                <button><a href="">Смотреть примеры в формате PDF</a></button>
            </Col>)}
        </Row>
        <h2>{t("add_interior.1")}</h2>
        <Row component={RowDiv}>
          <Col className='Card' lg={4} md={12}>
            <p>Авторский надзор</p>
            <img src="https://thumb.cadbull.com/img/product_img/original/Home-Project-Design-AutoCAD-Drawing-File--Thu-Nov-2019-07-06-46.jpg" alt="" />
          </Col>
        <Col className='Card' lg={4} md={12}>
            <p>Комплектация</p>
            <img src="https://thumb.cadbull.com/img/product_img/original/Home-Project-Design-AutoCAD-Drawing-File--Thu-Nov-2019-07-06-46.jpg" alt="" />
          </Col>
          <Col className='Card' lg={4} md={12}>
            <p>Консультация</p>
            <img src="https://thumb.cadbull.com/img/product_img/original/Home-Project-Design-AutoCAD-Drawing-File--Thu-Nov-2019-07-06-46.jpg" alt="" />
          </Col>
        </Row>
    </Wrapper>
  )
}

export default AddInteriorComponent