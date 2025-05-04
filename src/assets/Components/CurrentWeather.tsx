import { current } from "../Entities/current";
import { location } from "../Entities/location";

interface Props {
  current?: current;
  location?: location;
}

const CurrentWeather = ({ current, location }: Props) => {
  return (
    <div className="border">
      <div className="flex flex-col">
        <span>{current?.temp_c}&deg; </span>
        <span>{current?.condition.text}</span>
        <span>{location?.name}</span>
        <span>{location?.localtime}</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
