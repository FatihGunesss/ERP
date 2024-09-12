import { useLocation } from "react-router-dom";
import "./style.scss";

const Header = () => {
  let location = useLocation();
  const itemMap = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 2,
      title: "Xodimlar",
      path: "/employees",
    },
    {
      id: 3,
      title: "Clients",
      path: "/clients",
    },
    {
      id: 4,
      title: "Settings",
      path: "/settings",
    },
    // {
    //   id: 5,
    //   title: "Basic",
    //   path: "/basic",
    // },
  ];
  return (
    <div className="">
      <div className="flex">
        <div className="">
          {itemMap.map(
            (item, index) =>
              item.path === location.pathname && (
                <h1
                  className="text-[36px] font-bold pt-[48px] pl-[40px] pb-[25px]"
                  key={index}
                >
                  {item.title}
                </h1>
              )
          )}
        </div>
        {/* <div className="">
          <h2 className="text-[36px] font-bold pt-[48px] pl-[40px] pb-[25px]">Store Riviera</h2>
        </div> */}
      </div>
      <span className="header-line"></span>
    </div>
  );
};

export default Header;
