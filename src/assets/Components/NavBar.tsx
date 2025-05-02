import { useRef } from "react";
import logo from "../Pictures/WeatherLogo.png";

const NavBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex backdrop-blur-[2px] w-full border border-white my-10 p-2 t justify-around items-center rounded-2xl">
      <div className="flex items-center">
      <img src={logo} alt="" className="size-10 rounded-2xl" /> <span className="px-3 text-white font-bold text-2xl">Weather App</span>
      </div>
      <nav className="">
        <form
        className="w-48"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) {
            }
          }}
        >
          <input className="text-white border-2 p-2 rounded-2xl" ref={ref} type="text" placeholder="Search for a city..." />
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
