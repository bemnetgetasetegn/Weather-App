import { forcast } from "../Entities/forcast";
import { TwelveHrFormat } from "../Services/TwelveHrFormat";
import ForeCastCard from "./ForeCastCard";

interface Props {
  forcast?: forcast;
}

const HourlyForcast = ({ forcast }: Props) => {
  if (!forcast) return null;
  const date = new Date();
  const hr = date.getHours();
  const hourForcast = forcast.forecastday.flatMap((fore) => fore.hour);
  const flatten = hourForcast.filter(
    (f) => parseInt(f.time.substring(11)) >= hr
  );
  return (
    <div className="border-[1px] overflow-x-scroll lg:overflow-x-auto border-white/30 transform transition-transform rounded-2xl h-40 md:gap-5 gap-1 flex items-center justify-center">
      {flatten.slice(0, 7).map((fla) => (
        <ForeCastCard
          key={fla.time}
          time={TwelveHrFormat(fla.time.substring(11))}
          temp={fla.temp_f}
          icon={fla.condition.icon}
        />
      ))}
    </div>
  );
};

export default HourlyForcast;
