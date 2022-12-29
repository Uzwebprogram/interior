import React, { useEffect } from "react";
import { Section, GridContainer , GridContainerMobile } from "./styled-index";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Getcategories, GetproductsId } from "../../../redux/about";
import {Getproducts} from "./../../../redux/about"
import { useNavigate } from "react-router-dom";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageGrid = () => {
    const {t, i18n} = useTranslation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(Getcategories(window.localStorage.getItem("aboutId")))
    }, [])
    useEffect(() => {
      dispatch(Getproducts())
    }, [])
    const dataAbout = useSelector(state => state.categories?.getcategories?.Data) 
    const GetproductsData = useSelector(state => state.categories?.getproducts?.Data)
    const HandleClickGrid = async (e) => {
     await  window.localStorage.setItem("MoreId" , e.target.id)
      navigate("/servies");
      dispatch(GetproductsId(window.localStorage.getItem("MoreId")))
    }
    function GetLanguage() {
        return window.localStorage.getItem("i18nextLng")
    }
  return (
    <>
      <Section>
        <GridContainer>
          {dataAbout.map((elem , index) =>
          <h2 key={index}>  
                 {GetLanguage() == "ru" ? elem.title_ru : GetLanguage() == "uz" ? elem.title_uz : GetLanguage() == "en" ? elem.title_en : null }
            
          </h2>
          )}
          <ImageList
            className="grid-img"
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            { GetproductsData.map((item) => (
              window.localStorage.getItem("aboutId") == item.category_id ?
              <ImageListItem
                key={item.product_img1}
                cols={item.cols || 1}
                rows={item.rows || 2}
              >
                <img
                  {...srcset(item.product_img1, 121, item.rows, item.cols)}
                  alt="images Grid"
                  loading="lazy"
                  id={item.product_id}
                  onClick={HandleClickGrid}
                />
              </ImageListItem>
              : null
            ))}
          </ImageList>
        </GridContainer>
        <GridContainerMobile>
          {dataAbout.map((elem , index) =>
          <h2 key={index}>  
          {GetLanguage() == "ru" ? elem.title_ru : GetLanguage() == "uz" ? elem.title_uz : GetLanguage() == "en" ? elem.title_en : null }
            
          </h2>
          )}
          <ImageList
            className="grid-img"
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={24}
          >
            { GetproductsData.map((item) => (
              window.localStorage.getItem("aboutId") == item.category_id ?
              <ImageListItem
                key={item.product_img1}
                cols={6 || 1}
                rows={12 || 2}
              >
                <img
                  {...srcset(item.product_img1, 121)}
                  alt="images Grid"
                  loading="lazy"
                  id={item.product_id}
                  onClick={HandleClickGrid}
                />
              </ImageListItem>
              : null
            ))}
          </ImageList>
        </GridContainerMobile>
      </Section>
    </>
  );
};

export default ImageGrid;
