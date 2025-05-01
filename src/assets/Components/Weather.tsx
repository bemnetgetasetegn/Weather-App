import useWeather from "../Hooks/useWeather";
import Forcast from "./Forcast";

const Weather = () => {
  const { data } = useWeather();
  return (
    <div>
      {data?.current.is_day ? <p>Day</p> : <p>Night</p>}
      <p>{data?.current.last_updated}</p>
      <p>{data?.location.localtime}</p>
      <div>
        <p>{data?.current.condition.text}</p>
        <img
          src={data?.current.condition.icon}
          alt={data?.current.condition.text}
        />
        {/* <Forcast /> */}
      </div>
    </div>
  );
};

export default Weather;
