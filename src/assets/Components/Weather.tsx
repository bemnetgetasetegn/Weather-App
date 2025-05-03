import useWeather from "../Hooks/useWeather";
import Forcast from "./Forcast";

const Weather = () => {
  const { data } = useWeather();
  return (
    <div className="border">
      <div className="flex flex-col">
        <span>{data?.current.temp_c}&deg; </span>
        <span>{data?.current.condition.text}</span>
        <span>{data?.location.name}</span>
        <span>{data?.location.localtime}</span>
      </div>
    </div>
  );
};

export default Weather;
