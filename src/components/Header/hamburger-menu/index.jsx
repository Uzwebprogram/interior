import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Getcategories } from "../../../redux/about";
import { Wrapper } from "./styled-index";

function HamburgerMenu({ HamburgerClick, HandleClickClose }) {
  const { t, i18n } = useTranslation();
  const [drop, setDrop] = useState(false);
  const handleLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const HandleClickAbout = async (e) =>{
    await window.localStorage.setItem("aboutId" , e.target.value)
    dispatch(Getcategories(window.localStorage.getItem("aboutId")))
    navigate("/komerchskiy")
    HandleClickClose();
  }
  const HandleClickAbout2 = async (e) =>{
    await window.localStorage.setItem("aboutId" , e.target.value)
    dispatch(Getcategories(window.localStorage.getItem("aboutId")))
    navigate("/jily")
    HandleClickClose();
  }
  const data = [
    {
      id: 1,
      title: "Header.0",
      link: "/",
    },
    {
      id: 4,
      title: "Header.3",
      link: "/team",
    },
    {
      id: 5,
      title: "Header.4",
      link: "/portfolio",
    },
    {
      id: 5,
      title: "Header.5",
      link: "/addinterior",
    },
    {
      id: 6,
      title: "Header.3",
      link: "/projects",
    },
  ];
  return (
    <>
      {HamburgerClick === true ? (
        <Wrapper style={{ left: "0px" }}>
          <span onClick={HandleClickClose}>&times;</span>
          <select onChange={handleLang}>
            {LanguValue() === "ru" ? (
              <>
                <option value="ru">RUS</option>
                <option value="uz">UZB</option>
                <option value="en">ENG</option>
              </>
            ) : LanguValue() === "uz" ? (
              <>
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
              </>
            ) : LanguValue() === "en" ? (
              <>
                <option value="en">ENG</option>
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
              </>
            ) : (
              <>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
                <option value="uz">UZB</option>
              </>
            )}
          </select>
          <ul>
            {data.slice(0, 1).map((elem) => (
              <>
                <li key={elem.id}>
                  <button>
                    <NavLink onClick={HandleClickClose} to={elem.link}>
                      {t(elem.title)}
                    </NavLink>
                  </button>
                </li>
                <hr />
              </>
            ))}

            <li>
              <button className="links" value="1" onClick={HandleClickAbout}>
                {t("Header.1")}
              </button>
            </li>
            <hr />

            <li>
              <button className="links" value="2" onClick={HandleClickAbout2}>
                {t("Header.2")}
              </button>
            </li>
            <hr />
            {data.slice(2).map((elem) => (
              <>
                <li key={elem.id}>
                  <button>
                    <NavLink onClick={HandleClickClose} to={elem.link}>
                      {t(elem.title)}
                    </NavLink>
                  </button>
                </li>
                <hr />
              </>
            ))}
            <li>
              {drop ? (
                <>
                  <button className="conBtn" onClick={() => setDrop(false)}>
                    {t("Header.6")}
                  </button>
                  <hr />
                </>
              ) : (
                <>
                  <button className="conBtn" onClick={() => setDrop(true)}>{t("Header.6")}</button>
                  <hr />
                </>
              )}
              {drop ? (
                <>
                  <div className="dropdown">
                    <button>
                      <NavLink className="link" to={"/about"}>
                        <p>{t("Header.7")}</p>
                      </NavLink>
                    </button>
                    <br />
                    <button>
                      <NavLink className="link" to={"/vacancy"}>
                        <p>{t("Header.8")}</p>
                      </NavLink>
                    </button>
                    <br />
                    <button>
                      <NavLink className="link" to={"/contact"}>
                        <p>{t("Header.6")}</p>
                      </NavLink>
                    </button>
                  </div>
                </>
              ) : null}
            </li>
          </ul>
        </Wrapper>
      ) : HamburgerClick === false ? (
        <Wrapper style={{ left: "-650px" }}>
          <span onClick={HandleClickClose}>&times;</span>
          <select onChange={handleLang}>
            {LanguValue() === "ru" ? (
              <>
                <option value="ru">RUS</option>
                <option value="uz">UZB</option>
                <option value="en">ENG</option>
              </>
            ) : LanguValue() === "uz" ? (
              <>
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
              </>
            ) : LanguValue() === "en" ? (
              <>
                <option value="en">ENG</option>
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
              </>
            ) : null}
          </select>
          <ul>
            {data.map((elem) => (
              <>
                <li key={elem.id}>
                  <NavLink to={elem.link}>{t(elem.title)}</NavLink>
                </li>
                <hr />
              </>
            ))}
          </ul>
        </Wrapper>
      ) : null}
    </>
  );
}
export default HamburgerMenu;
