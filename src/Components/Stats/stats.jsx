import "./stats.css";
import briefcase from "../../Assets/Briefcase.png";

const Stats = ({ itemsList, packedItems }) => {
  return (
    <div className="statsArea">
      <img src={briefcase} alt="" />
      <p>
        You have {itemsList.length} item on your list, and you already packed{" "}
        {packedItems.length} (
        {Math.round((packedItems.length / itemsList.length) * 100)}%)
      </p>
    </div>
  );
};

export default Stats;
