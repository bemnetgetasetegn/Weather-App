import useForcast from "../Hooks/useForcast";

const Forcast = () => {
  const { data } = useForcast();
  const now = new Date();
  const hours = now.getHours();
  // const filter = data?.forecast.forecastday.map((forecast) => {
  //   return forecast.hour.filter((fore) => parseInt(fore.time.substring(10)) >= hours);
  // });
  return (
    <div>
      {data?.forecast.forecastday.map((forecast, index) => (
        <div key={index}>
          {forecast.hour.map((hr, ind) => (
            <p key={ind} className="py-0.5 border-2 w-30">
              {parseInt(hr.time.substring(10)) >= hours ? (
                <span>{parseInt(hr.time.substring(10))}:00</span>
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
