import { useRef, useState } from "react";
import { BsEmojiSmile, BsTwitter } from "react-icons/bs";
import "./styles/home.scss";
import { menuItems } from "./utils/menuBar";
import { IoIosMore } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdCancel, MdGif } from "react-icons/md";
import { whatsHappening } from "./utils/whatsHappening";
import { posts } from "./utils/posts";
import { HiOutlineSparkles } from "react-icons/hi";
import { RiImage2Line } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";
import { TbCalendarTime } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

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
            <img src="profileImg.jpg" alt="Foto de Perfil" />
            <div className="profileNames d-flex flex-column align-items-center">
              <span className="profileName">Kajuuro</span>
              <span className="profileUser">@kajuuro</span>
            </div>
          </div>
          <IoIosMore size={30} color="#e7e9ea" />
        </div>
      </aside>
      <main className="col-lg-5 px-0 pt-3 mainPage">
        <div className="homeHeader px-4 pt-1 pb-4 d-flex align-items-center justify-content-between">
          <span className="title">Página Inicial</span>
          <HiOutlineSparkles size={25} color="#fff" />
        </div>
        <div className="createTweet px-3">
          <div className="px-2 pr-0">
            <div className="top d-flex align-items-start">
              <img
                src="profileImg.jpg"
                alt="Foto de Perfil"
                width={60}
                height={60}
              />
              <div className="pl-2 w-100 d-flex flex-column align-items-start">
                <input type="text" placeholder="O que está acontecendo?" />
                <div className="action d-flex align-items-center justify-content-between w-100">
                  <div className="icons gap-3 d-flex align-items-center">
                    <RiImage2Line color="#1d9bf0" size={25} />
                    <div className="gif d-flex align-items-center justify-content-center">
                      <MdGif color="#1d9bf0" size={25} />
                    </div>
                    <CgOptions color="#1d9bf0" size={25} />
                    <BsEmojiSmile color="#1d9bf0" size={25} />
                    <TbCalendarTime color="#1d9bf0" size={25} />
                    <GoLocation color="#1d9bf0" size={25} />
                  </div>
                  <button className="tweetButton">Tweetar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {posts.map((post, idx) => (
          <div className="post">a</div>
        ))}
      </main>
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
