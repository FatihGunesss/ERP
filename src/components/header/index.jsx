import { useLocation } from 'react-router-dom';
import "./style.scss"

const Header = () => {
  let location = useLocation();
  console.log(location.pathname);
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
  ];
  return (
    <div className="">
      <div className="">
        {itemMap.map((item,index) => (
          item.path === location.pathname && <h1 className="text-[36px] font-bold mt-[48px] ml-[40px] mb-[25px]" key={index}>{item.title}</h1>
        ))}
         <span className="header-line"></span>
      </div>
    </div>
  )
}

export default Header