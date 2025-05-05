import useWeather from "../Hooks/useWeather";
import CurrentWeather from "./CurrentWeather";
// import Forcast from "./Forcast";

const Weather = () => {
  const { data, error } = useWeather();
  if (error) return <p className="text-2xl font-bold">{error.message}</p>;
  return <CurrentWeather location={data?.location} current={data?.current} />;
};

export default Weather;
