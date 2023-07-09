import Menu from "./Menu";
import { dataLink } from "../data";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row-reverse items-center mr-8">
        <Menu data={dataLink} />
      </ul>
    </nav>
  );
};

export default Navigation;
