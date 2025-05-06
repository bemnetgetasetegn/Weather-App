import { current } from "../Entities/current";
import windDrection from "../Pictures/WindDirections.png";
import { FaCloud } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

interface Props {
  current?: current;
}

const WeatherMetrics = ({ current }: Props) => {
  if (!current) return null;
  const directions: { [key: string]: string } = {
    N: "0deg",
    NE: "45deg",
    E: "90deg",
    SE: "135deg",
    S: "180deg",
    SW: "225deg",
    W: "270deg",
    NW: "315deg",
  };
  return (
    <div className=" border border-white/30 rounded-2xl">
      <div className="grid  grid-cols-2 grid-rows-3  p-3 text-2xl font-bold ">
        <div className="flex items-center ">
          <img
            src={windDrection}
            alt={current.wind_dir}
            className={`transform size-20`}
            style={{ transform: `rotate(${directions[current.wind_dir]})` }}
          />
          <span className="">{current.wind_kph}Kph</span>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <FaCloud size={40} /> {current.cloud}
        </div>
        <div className="flex gap-4 pl-4 items-center ">
          <WiHumidity size={50} /> {current.humidity}
        </div>
        <div className="flex gap-4 pl-15 items-center ">
          <WiHumidity size={50} /> {current.humidity}
        </div>
        <div className="flex gap-4 pl-4 items-center ">
          <WiHumidity size={50} /> {current.humidity}
        </div>
        <div className="flex gap-4 pl-15 items-center ">
          <WiHumidity size={50} /> {current.humidity}
        </div>
      </div>
    </div>
  );
};

export default WeatherMetrics;
