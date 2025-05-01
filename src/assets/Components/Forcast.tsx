import useForcast from "../Hooks/useForcast";

const Forcast = () => {
  const { data } = useForcast();
  const now = new Date();
  const hours = now.getHours();
  return (
    <div>
      {data?.forecast.forecastday.map((forecast) => (
        <div>
          {forecast.hour.map((hr) => (
            <p className="py-0.5 border-2 w-30">
              {parseInt(hr.time.substring(10)) >= hours ? (
                <p>{parseInt(hr.time.substring(10))}:00</p>
              ) : null}
              <img src={hr.condition.icon} alt="" />
             
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Forcast;
