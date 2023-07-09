import { Link } from "react-router-dom";
import MenuFooter from "../common/MenuFooter";
import {
  dataFooterMenuCenter,
  dataFooterMenuLeft,
  dataFooterMenuRight,
  dataFooterMenuTour,
} from "../data";
import {
  Logo,
  namad_1,
  namad_2,
  namad_3,
  namad_4,
  namad_5,
} from "../images/image";

const FooterMiddle = () => {
  return (
    <div className="flex flex-row-reverse justify-center items-start w-9/12	border-t-2 py-10">
      <div className="flex flex-col items-end flex-grow w-2/4">
        <div className="flex items-start">
          <MenuFooter data={dataFooterMenuLeft} />
          <MenuFooter data={dataFooterMenuCenter} />
          <MenuFooter data={dataFooterMenuRight} />
        </div>
        <ul className="flex items-center justify-end flex-wrap">
          {dataFooterMenuTour.map((item) => (
            <li className="px-2">
              <Link className="text-sm text-gray-400" to={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-between items-start flex-grow w-2/4 h-full">
        <img src={Logo} alt="logo" />
        <p>تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰</p>
        <p>
          دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم،
          بن‌بست گل‌ها، پلاک 1
        </p>
        <div className="flex items-center justify-evenly w-3/4">
          <img className="h-16" src={namad_1} alt="namad_1" />
          <img className="h-16" src={namad_2} alt="namad_2" />
          <img className="h-16" src={namad_3} alt="namad_3" />
          <img className="h-16" src={namad_4} alt="namad_4" />
          <img className="h-16" src={namad_5} alt="namad_5" />
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
