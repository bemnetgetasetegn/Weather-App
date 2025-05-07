interface Props {
  time: string;
  temp: number;
  icon: string;
}
const ForeCastCard = ({ time, temp, icon }: Props) => {
  return (
    <div className="border flex flex-col justify-center items-center">
      <span>{time}</span>
      <span>{temp}</span>
      <img className="w-20" src={icon} />
    </div>
  );
};

export default ForeCastCard;
