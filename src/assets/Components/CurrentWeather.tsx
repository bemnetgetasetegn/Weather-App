import { current } from "../Entities/current";
import { location } from "../Entities/location";
import { TwelveHrFormat } from "../Services/TwelveHrFormat";

interface Props {
  current?: current;
  location?: location;
}

const CurrentWeather = ({ current, location }: Props) => {
  return (
    <div className="border transform transition-transform hover:scale-102 border-white/20 rounded-2xl">
      <div className="relative flex justify-between">
        <div className="p-4 space-y-3 flex flex-col">
          <span className="text-7xl ">{current?.temp_f}&deg;F </span>
          <span className="text-4xl whitespace-nowrap">
            {current?.condition.text}
          </span>
          <span className="text-3xl">
            {location?.name}, {location?.country}
          </span>
          <span className="text-2xl">
            <span>{TwelveHrFormat(location?.localtime.substring(11))}</span>
          </span>
        </div>
        <div className="lg:absolute top-10 right-20">
          <img width={"100px"} src={current?.condition.icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
