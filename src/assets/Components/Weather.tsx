import useWeather from "../Hooks/useWeather";
import CurrentWeather from "./CurrentWeather";
// import Forcast from "./Forcast";

const Weather = () => {
  const { data } = useWeather();
  return (
    <>
      <CurrentWeather location={data?.location} current={data?.current} />
    </>
  );
};

export default Weather;
