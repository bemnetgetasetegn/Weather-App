import useForcast from "../Hooks/useForcast";
import useWeather from "../Hooks/useWeather";
import CurrentWeather from "./CurrentWeather";
import HourlyForcast from "./HourlyForcast";
import WeatherMetrics from "./WeatherMetrics";
// import Forcast from "./Forcast";

const Weather = () => {
  const { data, error } = useWeather();
  const { data: forcast } = useForcast();
  
  if (error) return <p className="text-2xl font-bold">{error.message}</p>;

  return (
    <div className="grid md:grid-rows-2 md:grid-cols-[60%_auto] gap-4">
      <CurrentWeather location={data?.location} current={data?.current} />
      <WeatherMetrics current={data?.current} />
      <HourlyForcast forcast={forcast?.forecast} />
    </div>
  );
};

export default Weather;
