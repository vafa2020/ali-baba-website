import { Link } from "react-router-dom";

const SubMenu = ({ data }) => {
  if (data.length === 0) {
    return;
  }
  return (
    <ul className="submenu hidden flex-col text-right absolute top-14 right-0 bg-white w-32 rounded p-2 border-2 ">
      {data.map((item) => (
        <li key={item.to} className="border-b-2 py-2 last:border-b-0 hover:bg-gray-50">
          <Link to={item.to}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
