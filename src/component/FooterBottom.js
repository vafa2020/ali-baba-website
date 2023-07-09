import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-between w-9/12 border-t-2 py-5">
      <p className="w-2/3 text-xs text-end">
        کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به
        شرکت سفرهای علی‌بابا می‌باشد. (نسخه 1.255.7)
      </p>
      <div className="flex items-center justify-evenly w-1/3">
        <FaInstagram size={30} />
        <FaTelegram size={30} />
        <FaTwitter size={30} />
        <FaYoutube size={30} />
        <FaLinkedin size={30} />
      </div>
    </div>
  );
};

export default FooterBottom;
