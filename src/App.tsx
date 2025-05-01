import NavBar from "./assets/Components/NavBar";
import Weather from "./assets/Components/Weather";

const App = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-[url('./assets/Pictures/dat.png')] bg-cover bg-center h-screen">
      <div className="">
        <NavBar />
        <Weather />
      </div>
    </div>
  );
};

export default App;
