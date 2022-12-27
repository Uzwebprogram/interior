import React from "react";
import { Section, GridContainer } from "./styled-index";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "./data";
import { useTranslation } from "react-i18next";
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
  return (
    <>
      <Section>
        <GridContainer>
          <h2>{t("GridImg.0")}</h2>
          <ImageList
            className="grid-img"
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 2}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </GridContainer>
      </Section>
    </>
  );
};

export default ImageGrid;
