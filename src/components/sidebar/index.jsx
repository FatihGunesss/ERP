import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/image/icons/Logo.png";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import "./style.scss";

const Sidebar = () => {
  const [actived, setActived] = useState(1);

  const itemMap = [
    {
      id: 1,
      icon: <DashboardOutlinedIcon />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 2,
      icon: <Person3OutlinedIcon />,
      title: "Xodimlar",
      path: "/employees",
    },
    {
      id: 3,
      icon: <PeopleAltOutlinedIcon />,
      title: "Clients",
      path: "/clients",
    },
    {
      id: 4,
      icon: <SettingsOutlinedIcon />,
      title: "Settings",
      path: "/settings",
    },
  ];
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col justify-center items-center mt-10">
          <img className="w-[70px] h-[70px]" src={Logo} alt="Logo" />
        </div>

        <div className="h-[60vh] overflow-y-scroll no-scrollbar mt-10">
          {itemMap.map((item, index) => (
            <Link
              to={item.path}
              onClick={() => setActived(item.id)}
              className={
                actived === item.id
                  ? "sidebar-menuitem sidebar-menuitem-actived"
                  : "sidebar-menuitem"
              }
              key={index}
            >
              <div>{item.icon}</div>
              <p className="font-bold">{item.title}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="sidebar-user__image">DO</div>

          <Link>
            <div className="">
              <p className=" w-[140px] font-bold text-[#6F6F6F]">
                Достонхон Озодходжаев
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
