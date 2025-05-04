import { current } from "../Entities/current";
import { location } from "../Entities/location";

interface Props {
  current?: current;
  location?: location;
}

const CurrentWeather = ({ current, location }: Props) => {
  return (
    <div className="border md:w-150 rounded-2xl">
      <div className="flex">
        <div className="p-4 flex flex-col">
          <span className="text-7xl ">{current?.temp_c}&deg; </span>
          <span className="text-4xl">{current?.condition.text}</span>
          <span className="text-3xl">{location?.name}</span>
          <span className="text-2xl">{location?.localtime}</span>
        </div>
        <div>
          <img src={current?.condition.icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
