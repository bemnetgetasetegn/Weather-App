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
    <div className="flex border border-white/30 rounded-2xl">
      <span>hello</span>
      <img
        src={windDrection}
        alt={current.wind_dir}
        className={`transform size-20`}
        style={{ transform: `rotate(${directions[current.wind_dir]})` }}
      />
      {current.wind_dir}
    </div>
  );
};

export default WeatherMetrics;
