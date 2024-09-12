import { App, TimePicker } from "antd";
import { Switch } from 'antd';
import dayjs from "dayjs";

import "./style.scss";


const Basic = ({parametr, setParametr}) => {
  const format = "HH:mm";
  const App = () => (
    <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
  );
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  

  return (
    <div className={parametr.open ? "open"  : "main-section__wrapper open"}>
      <div className="main-section flex justify-between">
        <div className="main-left">
          <h3 className="text-[#6F6F6F]">Основные</h3>
        </div>
        <div className="main-right">
          <div className="main-section__right-info">
            <div className="main-section__add-store">
              <p className="">Наименование</p>
              <input type="text" placeholder="Store Riviera" />
            </div>
            <div className="main-section__add-store">
              <p className="">Квадратура</p>
              <input type="number" placeholder="m2" />
            </div>
          </div>
          <h4 className="mt-[32px] mb-[16px] text-[#6F6F6F]">Режим работы</h4>
          <div className="basic-time__wrapper">
            <div className="time-basic">
              <p className="basic-day">Понедельник</p>
              <span className="basic-line"></span>
              <p className="basic-opened__time">Открытие:</p>
              <TimePicker
                className="basic-time font-bold"
                placeholder="XX:XX"
              />
              <p className="basic-opened__time">Закрытие:</p>
              <TimePicker className="basic-time" placeholder="XX:XX" />
              <Switch/>
            </div>
            <div className="time-basic">
              <p className="basic-day">Вторник</p>
              <span className="basic-line"></span>
              <p className="basic-opened__time">Открытие:</p>
              <TimePicker
                className="basic-time font-bold"
                placeholder="XX:XX"
              />
              <p className="basic-opened__time">Закрытие:</p>
              <TimePicker className="basic-time" placeholder="XX:XX" />
              <Switch/>
            </div>
            <div className="time-basic">
              <p className="basic-day">Среда</p>
              <span className="basic-line"></span>
              <p className="basic-opened__time">Открытие:</p>
              <TimePicker
                className="basic-time font-bold"
                placeholder="XX:XX"
              />
              <p className="basic-opened__time">Закрытие:</p>
              <TimePicker className="basic-time" placeholder="XX:XX" />
              <Switch/>
            </div>
            <div className="time-basic">
              <p className="basic-day">Четверг</p>
              <span className="basic-line"></span>
              <p className="basic-opened__time">Открытие:</p>
              <TimePicker
                className="basic-time font-bold"
                placeholder="XX:XX"
              />
              <p className="basic-opened__time">Закрытие:</p>
              <TimePicker className="basic-time" placeholder="XX:XX" />
              <Switch/>
            </div>
            <div className="time-basic">
              <p className="basic-day">Пятница</p>
              <span className="basic-line"></span>
              <p className="basic-opened__time">Открытие:</p>
              <TimePicker
                className="basic-time font-bold"
                placeholder="XX:XX"
              />
              <p className="basic-opened__time">Закрытие:</p>
              <TimePicker className="basic-time" placeholder="XX:XX" />
              <Switch/>
            </div>
            <div className="time-basic">
              <p className="basic-day">Суббота</p>
              <span className="basic-line"></span>
              <p className="basic-opened__time">Открытие:</p>
              <TimePicker
                className="basic-time font-bold"
                placeholder="XX:XX"
              />
              <p className="basic-opened__time">Закрытие:</p>
              <TimePicker className="basic-time" placeholder="XX:XX" />
              <Switch/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
