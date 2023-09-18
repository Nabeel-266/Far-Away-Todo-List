import "./logo.css";
import island from "../../Assets/Island-Icon.png";
import briefcase from "../../Assets/Briefcase.png";

const Logo = () => {
  return (
    <div className="logoArea">
      <img className="islandImage" src={island} alt="" />
      <h1>Far Away</h1>
      <img className="briefcase" src={briefcase} alt="" />
    </div>
  );
};

export default Logo;
