import { Link } from "react-router-dom";
import { Logo } from "../images/image";
import Navigation from "./Navigation";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GiRollingSuitcase } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-white h-16 w-full flex flex-row-reverse items-center justify-between px-10 py-9 shadow-xl sticky top-0 z-10">
      <div className="flex justify-end grow">
        <Navigation />
        <span>
          <Link to="https://www.alibaba.ir">
            <img className="h-10" src={Logo} alt="logo" />
          </Link>
        </span>
      </div>
      <div className="flex flex-row-reverse grow  items-center justify-evenly">
        <p className="flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:rounded-sm p-5">
          <Link className="text-base " to="/help-center">
            مرکز پشتیبانی آنلاین
          </Link>
          <AiOutlineQuestionCircle className="-scale-x-100 ml-2 text-xl" />
        </p>
        <p className="flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:rounded-sm p-5">
          <Link className="text-base" to="/profile/orders">
            سفرهای من
          </Link>
          <GiRollingSuitcase className="text-xl ml-2" />
        </p>
        <p className="flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:rounded-sm p-5">
          <p>ورود یا ثبت نام</p>
          <BsFillPersonFill className="text-xl ml-2" />
        </p>
      </div>
    </header>
  );
};

export default Header;
