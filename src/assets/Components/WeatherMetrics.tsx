import { current } from "../Entities/current";

interface Props {
  current: current;
}

const WeatherMetrics = ({current}: Props) => {
    const windDirection = {
        'N': ''
    }
  return (
    <div className="flex">
      <span></span>
    </div>
  );
};

export default WeatherMetrics;
