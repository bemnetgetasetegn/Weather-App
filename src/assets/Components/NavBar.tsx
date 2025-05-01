import { useRef } from "react";

const NavBar = () => {

  const ref = useRef<HTMLInputElement>(null);
  return (
    <nav className="flex justify-between">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) {
          }
        }}
      >
        <input ref={ref} type="text" placeholder="Search for a city..." />
      </form>
    </nav>
  );
};

export default NavBar;
