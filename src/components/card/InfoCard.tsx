import temp from "../../assets/nft.jpg";
import "./info-card.css";
interface Props {
  img: string;
  title: string;
  techStacks: string;
  projectInfo: string;
}

const InfoCard = ({ img, title, techStacks, projectInfo }: Props) => {
  console.log(img);
  return (
    <div className="card-container">
      <img src={temp}></img>
      <div className="card-text-container ">
        <h1>{title}</h1>
        <h3>{techStacks}</h3>
        <p>{projectInfo}</p>
      </div>
    </div>
  );
};

export default InfoCard;
