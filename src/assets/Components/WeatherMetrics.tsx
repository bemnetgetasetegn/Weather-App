import { current } from "../Entities/current";
import windDrection from "../Pictures/WindDirections.png";
import HeatIndex from "../Pictures/HeatIndex.png";
import uv from "../Pictures/UV.png";
import { FaCloud } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GrUpdate } from "react-icons/gr";

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
    <div className="border transform transition-transform hover:scale-102 border-white/30 rounded-2xl">
      <div className="grid  grid-cols-2 grid-rows-3  p-3 text-2xl font-bold ">
        <div className="flex items-center ">
          <img
            src={windDrection}
            alt={current.wind_dir}
            className={`transform size-20`}
            style={{ transform: `rotate(${directions[current.wind_dir]})` }}
          />
          <span className="">{current.wind_kph} Kph</span>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <FaCloud size={40} /> {current.cloud}%
        </div>
        <div className="flex gap-4 pl-4 items-center ">
          <WiHumidity size={50} /> {current.humidity}%
        </div>
        <div className="flex  pl-12 items-center ">
          <img className="size-15" src={HeatIndex} color="white" />{" "}
          {current.heatindex_f}&deg;F
        </div>
        <div className="flex gap-4 pl-3 items-center ">
          <img src={uv} className="size-15" /> {current.uv}
        </div>
        <div className="flex gap-4 pl-17 items-center ">
          <GrUpdate /> {current.last_updated.substring(11)}
        </div>
      </div>
    </div>
  );
};

export default WeatherMetrics;
