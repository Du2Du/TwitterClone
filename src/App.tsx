import { useRef, useMemo, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import "./styles/home.scss";
import { menuItems } from "./utils/menuBar";
import { IoIosMore } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { whatsHappening } from "./utils/whatsHappening";

function App() {
  const inputRef = useRef<HTMLDivElement>(null);
  const [searchIsBlue, setSearchIsBlue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchColor = searchIsBlue ? "#1d9bf0" : "#71767b";

  const changeSearchClass = (isBlue: boolean, action: "add" | "remove") => {
    setSearchIsBlue(isBlue);
    inputRef.current?.classList[action]("blueBorder");
  };

  return (
    <div className="row w-100 px-5">
      <aside className="col-lg-3 d-flex flex-column align-items-start pt-3 leftAside">
        <div className="twitterIcon">
          <BsTwitter size={40} color="#D6D9DB" />
        </div>
        {menuItems.map((item, idx) => (
          <div
            className={`d-flex align-items-center menuIcons ${
              item.selected ? "selectedMenu" : ""
            }`}
            key={idx}
          >
            {item.icon} <span>{item.name}</span>
          </div>
        ))}
        <button className="tweetButton">Tweetar</button>
        <div className="profileInfo w-100 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <img src="profileImg.jpg" />
            <div className="profileNames d-flex flex-column align-items-center">
              <span className="profileName">Kajuuro</span>
              <span className="profileUser">@kajuuro</span>
            </div>
          </div>
          <IoIosMore size={30} color="#e7e9ea" />
        </div>
      </aside>
      <main className="col-lg-5 pt-3"></main>
      <aside className="col-lg-4 rightAside pt-3 d-flex flex-column align-items-center">
        <div ref={inputRef} className="searchInput d-flex align-items-center">
          <BiSearch size={30} color={searchColor} />
          <input
            value={inputValue}
            onChange={(ev) => setInputValue(ev.target.value)}
            onClick={() => changeSearchClass(true, "add")}
            onBlur={() => changeSearchClass(false, "remove")}
            type="text"
            placeholder="Buscar no Twitter"
          />
          {inputValue ? (
            <MdCancel
              className="clearInput"
              onClick={() => setInputValue("")}
              size={40}
              color="#1d9bf0"
            />
          ) : null}
        </div>
        <div className="whatsHappening d-flex flex-column justify-content-between">
          <span className="happeningTitle">O que está acontecendo</span>
          {whatsHappening.map((notice, idx) => {
            const { legend, title, image, tweets } = notice;
            return (
              <div
                key={idx}
                className="d-flex flex-row justify-content-between align-items-start"
              >
                <div className="d-flex flex-column happeningInfo">
                  <div className="legend">{legend}</div>
                  <div className="title">{title}</div>
                  {tweets ? <div className="legend">{tweets}</div> : null}
                </div>
                {image ? image : <IoIosMore size={25} color="#71767b" />}
              </div>
            );
          })}
          <span className="showMore">Mostrar mais</span>
        </div>
        <div className="legends d-flex">
          <span>Termos de Serviço </span>
          <span>Política de Privacidade </span>
          <span>Política de cookies </span>
          <span>Acessibilidade </span>
          <span>Informações de anúncios </span>
          <span>
            Mais <IoIosMore size={15} color="#71767b" />
          </span>
          <span>© 2022 Twitter, Inc.</span>
        </div>
      </aside>
    </div>
  );
}

export default App;
