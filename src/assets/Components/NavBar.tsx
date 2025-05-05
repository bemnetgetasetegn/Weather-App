import { useRef } from "react";
import logo from "../Pictures/WeatherLogo.png";

const NavBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex w-full border-[1px] border-white/20 my-10 py-3 t justify-around items-center rounded-2xl">
      <div className="flex items-center px1 md:px-10">
        <img src={logo} alt="" className="size-10 rounded-2xl" />{" "}
        <span className="px-3  text-white font-bold whitespace-nowrap md:text-2xl">
          Weather App
        </span>
      </div>
      <nav>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) {
              console.log(ref.current.value);
            }
          }}
        >
          <input
            className="text-white border-[1px] focus:outline-none placeholder-white border-white/20   md:w-[432px] lg:w-[532px] p-2 rounded-2xl"
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
