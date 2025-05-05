import { current } from "../Entities/current";
import windDrection from "../Pictures/WindDirections.png";

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
      <div className=" flex p-9 text-2xl font-bold justify-between items-center">
        <div className="">
          <div className="flex justify-center items-center w-20 h-20">
            <img
              src={windDrection}
              alt={current.wind_dir}
              className={`transform size-20`}
              style={{ transform: `rotate(${directions[current.wind_dir]})` }}
            />
            <span className="">{current.wind_kph}Kph</span>
          </div>
        </div>
        <div className="">
          <span className="">Cloud {current.cloud}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherMetrics;
