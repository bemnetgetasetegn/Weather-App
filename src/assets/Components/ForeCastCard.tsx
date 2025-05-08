interface Props {
  time: string;
  temp: number;
  icon: string;
}
const ForeCastCard = ({ time, temp, icon }: Props) => {
  return (
    <div className="border-[1px] border-white/20 transform transition-transform hover:scale-105 rounded-2xl flex flex-col justify-center items-center">
      <span className="whitespace-nowrap">{time}</span>
      <img className="w-20" src={icon} />
      <span className="font-bold text-[20px]">{temp}&deg;F</span>
    </div>
  );
};

export default ForeCastCard;
