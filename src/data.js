import { AiOutlineDown } from "react-icons/ai";
import { services_1, services_2, services_3 } from "./images/image";

const dataTiket = [
  { to: "https://www.alibaba.ir/", title: "پرواز داخلی" },
  { to: "https://www.alibaba.ir/iranout", title: "پرواز خارجی" },
  { to: "https://www.alibaba.ir/train-ticket", title: "قطار" },
  { to: "https://www.alibaba.ir/bus-ticket", title: "اتوبوس" },
];
const dataAccommodation = [
  { to: "https://www.alibaba.ir/hotel", title: "هتل" },
  { to: "https://www.alibaba.ir/accommodation", title: "ویلا و اقامتگاه" },
];
const dataMore = [
  { to: "https://www.alibaba.ir/plus", title: "علی بابا پلاس" },
  {
    to: "https://www.alibaba.ir/mag/?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Maghttps://www.alibaba.ir/mag?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Mag",
    title: "مجله علی بابا",
  },
  { to: "https://www.alibaba.ir/insurance", title: "بیمه مسافرتی" },
];
const dataFooterTop = [
  {
    title: "همسفر همه لحظات سفر",
    description: "پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر",
    img: services_3,
  },
  {
    title: " همسفر هر سفر ",
    description: " ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)",
    img: services_2,
  },
  {
    title: "رتبه یک سفر",
    description: "معتبرترین عرضه‌کننده محصولات گردشگری در ایران",
    img: services_1,
  },
];
const dataLink = [
  {
    icon: <AiOutlineDown className="mr-4" />,
    title: "بلیط",
    data: dataTiket,
    to: "",
  },
  {
    icon: <AiOutlineDown className="mr-4" />,
    title: "اقامت",
    data: dataAccommodation,
    to: "",
  },
  {
    icon: <div className="mr-4"></div>,
    title: "تور",
    data: [],
    to: "/tour",
  },
  {
    icon: <AiOutlineDown className="mr-4" />,
    title: "بیشتر",
    data: dataMore,
    to: "",
  },
];
const dataFooterMenuRight = [
  {
    title: "علی‌بابا",
    links: [
      { path: "https://www.alibaba.ir/about-us", title: "درباره ما" },
      {
        path: "https://www.alibaba.ir/help-center/contact-us",
        title: "تماس با ما",
      },
      { path: "https://www.alibaba.ir/why-alibaba", title: "چرا علی‌ بابا" },
      { path: "https://www.alibaba.ir/plus", title: "علی بابا پلاس" },
      { path: "https://www.alibaba.ir/insurance", title: "بیمه مسافرتی" },
      {
        path: "https://www.alibaba.ir/mag/?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Maghttps://www.alibaba.ir/mag?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Mag",
        title: "مجله علی‌بابا",
      },
    ],
  },
];
const dataFooterMenuCenter = [
  {
    title: "خدمات مشتریان",
    links: [
      {
        path: "https://www.alibaba.ir/help-center",
        title: "مرکز پشتیبانی آنلاین",
      },
      {
        path: "https://www.alibaba.ir/help-center/categories/purchase-guide",
        title: "راهنمای خرید",
      },
      {
        path: "https://www.alibaba.ir/help-center/categories/refund-guide",
        title: "راهنمای استرداد",
      },
      {
        path: "https://www.alibaba.ir/help-center/general-policy",
        title: "قوانین و مقررات",
      },
      {
        path: "https://www.alibaba.ir/help-center/categories/faq",
        title: "پرسش و پاسخ",
      },
    ],
  },
];
const dataFooterMenuLeft = [
  {
    title: "اطلاعات تکمیلی",
    links: [
      { path: "https://www.alibaba.ir/loyalty", title: "باشگاه همسفران" },
      {
        path: "https://www.alibaba.ir/business",
        title: "فروش سازمانی",
      },
      {
        path: "https://partner.alibaba.ir/?_gl=1%2a1fjtqps%2a_ga%2aMjAyMTMyOTU0Mi4xNjg4MTkwOTc2%2a_ga_DWDTDP3T60%2aMTY4ODI4MTY0NS41LjEuMTY4ODI4MzUxMS41Ni4wLjA.",
        title: "همکاری با آژانس‌ها",
      },
      { path: "https://www.alibaba.ir/jobs", title: "فرصت‌های شغلی" },
    ],
  },
];
const dataFooterMenuTour = [
  { path: "https://www.alibaba.ir/charter-ticket", title: "بلیط چارتر" },
  {
    path: "https://www.alibaba.ir/tour/iran-kish_island",
    title: "تور کیش",
  },
  {
    path: "https://www.alibaba.ir/tour/turkey-istanbul",
    title: "تور استانبول",
  },
  { path: "https://www.alibaba.ir/accommodation/all-cottage", title: "اجاره کلبه جنگلی" },
  { path: "https://www.alibaba.ir/train-ticket", title: "بلیط قطار" },
  { path: "https://www.alibaba.ir/iranout", title: "خرید بلیط هواپیما خارجی" },
  { path: "https://www.alibaba.ir/flight-info", title: "اطلاعات فرودگا‌هی" },
  { path: "https://www.alibaba.ir/passenger-rights.pdf", title: "شیوه‌نامه حقوق مسافر" },
  { path: "https://www.alibaba.ir/hotel", title: "رزرو هتل" },
  { path: "https://www.alibaba.ir/hotel/ir-mashhad?countryCode=IR&region=dom&destination=City_5be3f68be9a116befc66701b_%D9%85%D8%B4%D9%87%D8%AF+-+%D8%A7%DB%8C%D8%B1%D8%A7%D9%86&departing=2023-07-03&returning=2023-07-04&rooms=30", title: "هتل مشهد" },
  { path: "https://www.alibaba.ir/hotel/ir-kish?countryCode=IR&region=dom&destination=City_5be3f68be9a116befc66704b_%DA%A9%DB%8C%D8%B4+-+%D8%A7%DB%8C%D8%B1%D8%A7%D9%86&departing=2023-07-03&returning=2023-07-04&rooms=30", title: "هتل کیش" },
  { path: "https://www.alibaba.ir/hotel/ir-mashhad/mashhad-darvishi?sessionId=64a14c6a2f747800243a82e7&departing=2023-07-02&returning=2023-07-03&rooms=30&destination=Hotel_752146&region=dom&countryCode=IR&cityId=5be3f68be9a116befc66701b", title: "هتل درویشی مشهد" },
  { path: "https://www.alibaba.ir/hotel/ir-kish/kish-shaygan?sessionId=64a14c6e16ea07002346c74a&departing=2023-07-02&returning=2023-07-03&rooms=30&destination=Hotel_dh-fd64fd4ffdfd26&region=dom&countryCode=IR&cityId=5be3f68be9a116befc66704b", title: "هتل شایگان کیش" },
];
export {
  dataLink,
  dataFooterTop,
  dataFooterMenuRight,
  dataFooterMenuCenter,
  dataFooterMenuLeft,
  dataFooterMenuTour,
};
