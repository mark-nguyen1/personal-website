import "./info-card.css";
interface Props {
  img: string;
  title: string;
  techStacks: string;
  projectInfo: string;
  githubLink: string;
}

const InfoCard = ({
  img,
  title,
  techStacks,
  projectInfo,
  githubLink,
}: Props) => {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={img}></img>
      </div>

      <div className="card-text-container">
        <h1>{title}</h1>
        <h3>{techStacks}</h3>
        <p>{projectInfo}</p>
        <p>
          [
          <a href={githubLink} target="_blank">
            code
          </a>
          ]
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
