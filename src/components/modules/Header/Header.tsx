import { BsFillBellFill, BsFillChatFill } from "react-icons/bs";
import Logo from "../Logo/Logo";
import ProfileSection from "./ProfileSection";
import LoginLogoutArea from "../Controls/LoginLogout";
import TextInput from "../Inputs/TextInputs";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Header() {


  return (
    <div className="w-full">
      <div className="w-full h-[55px] neu__norm rounded-full flex items-center justify-between px-10">
        {/* logo */}
        <Logo />
        {/* Clock & bell */}
        <div className="flex items-center gap-5">
          <BsFillBellFill className="w-4 h-4 transition-all duration-500 hover:text-(--hover-color) cursor-pointer hover:scale-[1.2]" />
          <TextInput icon={BiSearchAlt2} inputID="searchbar" place="Search ..." containerClass="py-2 gap-2" />
          <ProfileSection />
          <div className="-ms-3"><LoginLogoutArea/></div>
        </div>
      </div>
    </div>
  )
}
