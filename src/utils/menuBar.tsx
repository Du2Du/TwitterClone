import {
  RiHome7Fill,
  RiFileList2Line,
  RiNotification2Line,
} from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";

export const menuItems = [
  {
    name: "Página Inicial",
    icon: <RiHome7Fill size={30} color="#e7e9ea" />,
    selected: true,
  },
  {
    name: "Explorar",
    icon: <BiHash size={30} color="#e7e9ea" />,
  },
  {
    name: "Notificações",
    icon: <RiNotification2Line size={30} color="#e7e9ea" />,
  },
  {
    name: "Mensagens",
    icon: <FaRegEnvelope size={30} color="#e7e9ea" />,
  },
  {
    name: "Itens Salvos",
    icon: <BsBookmark size={30} color="#e7e9ea" />,
  },
  {
    name: "Listas",
    icon: <RiFileList2Line size={30} color="#e7e9ea" />,
  },
  {
    name: "Perfil",
    icon: <HiOutlineUser size={30} color="#e7e9ea" />,
  },
  {
    name: "Mais",
    icon: <CgMoreO size={30} color="#e7e9ea" />,
  },
];
