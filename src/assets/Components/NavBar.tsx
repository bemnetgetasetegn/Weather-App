import { useRef } from "react";
import logo from "../Pictures/WeatherLogo.png";
import querySetter from "../../Store";

const NavBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setQuery = querySetter((s) => s.Query);
  return (
    <div className="flex w-full border-[1px] border-white/20 my-10 p-2 md:py-3 transform transition-transform hover:scale-105 justify-around items-center rounded-2xl">
      <div className="flex items-center px1 md:px-10">
        <img src={logo} alt="" className="size-10 rounded-2xl" />{" "}
        <span className="md:px-3 pl-2 text-white font-bold md:whitespace-nowrap text-center md:text-2xl text-[15px]">
          Weather App
        </span>
      </div>
      <nav>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (ref.current?.value) {
              setQuery(ref.current.value);
            }
          }}
        >
          <input
            className="text-white border-[1px] focus:outline-none placeholder-white border-white/20 sm:w-fit  md:w-[432px] lg:w-[532px] w-full p-2 rounded-2xl"
            ref={ref}
            type="text"
            placeholder=" Search for a city..."
          />
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
