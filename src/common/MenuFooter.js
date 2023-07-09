import { Link } from "react-router-dom";
const MenuFooter = ({ data }) => {
  const [dataMenu] = data;
  const { title, links } = dataMenu;
  //   console.log(title,data);
  return (
    <div className="flex flex-col items-end ml-10">
      <h3>{title}</h3>
      <nav className="mt-4">
        <ul className="flex flex-col items-end">
          {links.map((item) => (
            <li key={item.path} className="leading-6">
              <Link className="text-sm text-gray-500 font-bold" to={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
       
      </nav>
    </div>
  );
};

export default MenuFooter;
