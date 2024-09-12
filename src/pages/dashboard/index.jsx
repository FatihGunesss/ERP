import Basic from "pages/basic";
import { Button } from "components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

import "./style.scss";

const Dashboard = ({ setParametr }) => {
  return (
    <div>
      <div className="p-8">
        <div className="flex justify-between">
          <div className="dashboard-search">
            <SearchOutlinedIcon className="absolute top-[15px] left-[8px] text-[#BDBDBD]" />
            <input type="search" placeholder="Название магазина" />
          </div>
          <div
            
            className="relative"
          >
            <AddOutlinedIcon className="absolute top-[16px] left-[5px] text-[#fff] text-[40px]" />
            <Button onClick={() => setParametr({ open: true, data: { } })} className={"dashboard-btn"} title={"Новый магазин"} />
          </div>
        </div>
        <div className="dashboard-section">
          <span className="dashboard-line"></span>
          <div className="flex justify-between pt-[5px] pr-[65px] pl-[20px]">
            <p className="dashboard-market__info">Магазин</p>
            <p className="dashboard-market__info">Кол-во касс</p>
            <p className="dashboard-market__info">Действие</p>
          </div>
          <span className="dashboard-line"></span>
        </div>
        <div className="">
          <div className="dashboard-market__about">
            <h4 className="text-[#4993DD]">Store Riviera</h4>
            <p className="mr-[100px] text-[#6F6F6F]">1</p>
            <p className="dashboard-close__icon">
              <CancelIcon className="width-[16px] height-[16px]" />
            </p>
          </div>
        </div>
        <span className="dashboard-line"></span>
      </div>
    </div>
  );
};

export default Dashboard;
