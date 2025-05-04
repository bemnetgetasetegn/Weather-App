import NavBar from "./assets/Components/NavBar";
import Weather from "./assets/Components/Weather";

const App = () => {
  return (
    <div className="flex text-white justify-center items-center flex-col bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('./assets/Pictures/dat.png')] bg-cover bg-center h-screen">
      <div className="w-screen p-5 lg:p-20  backdrop-blur-[2px]">
        <NavBar />
        <Weather />
      </div>
    </div>
  );
};

export default App;
