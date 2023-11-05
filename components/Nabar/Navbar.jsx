import { menuItems } from "@/constants/nav";
import MenuItems from "./MenuItems";
const Navbar = () => {
  const depthLevel = 0;
  return (
    <nav className="nav">
      <ul className="nav-menu flex flex-col">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
