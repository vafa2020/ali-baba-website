import { dataFooterTop } from "../data";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="container flex flex-col justify-center items-center h-96 mt-20">
      <FooterTop data={dataFooterTop} />
      <FooterMiddle />
      <FooterBottom/>
    </footer>
  );
};

export default Footer;
