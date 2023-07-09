import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

const Menu = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <li key={item.title} className="menu relative border-l-2 px-2 last:border-0">
          <div className="flex items-center hover:bg-gray-50 hover:rounded-sm px-2 py-1 cursor-pointer">
            {item.icon}
            <Link className="text-base">{item.title}</Link>
          </div>
          <SubMenu data={item.data} />
        </li>
      ))}
    </>
  );
};

export default Menu;
