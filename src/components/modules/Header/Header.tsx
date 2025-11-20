import { BsFillChatFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { FaStethoscope } from "react-icons/fa";
import Clock from "../Clock/Clock";

export default function Header() {

  const { t } = useTranslation()

  return (
    <div className="w-full">
      <div className="w-full h-[55px] neu__norm rounded-full flex items-center justify-between ps-10 pe-4">
        {/* logo */}
        <div className="h-full flex items-center">
          <img className="h-[30px]" src="/logo.png" alt="" />
        </div>
        {/* <div className="font-bold flex gap-1 items-center">
          <FaStethoscope className="w-4 h-4 text-blue-500" />
          <span className="text-[20px] text-teal-600">{t('login.title')}</span>
        </div> */}
        {/* Clock & bell */}
        <div className="flex items-center gap-5">
          <BsFillBellFill className="w-4 h-4 transition-all duration-500 hover:text-(--hover-color) cursor-pointer hover:scale-[1.2]" />
          <BsFillChatFill className="w-4 h-4 transition-all duration-500 hover:text-(--hover-color) cursor-pointer hover:scale-[1.2]" />
          <Clock />
        </div>
      </div>
    </div>
  )
}
