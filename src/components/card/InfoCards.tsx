import InfoCard from "./InfoCard";
import projectData from "../../data/projects.json";
const InfoCards = () => {
  return (
    <>
      {projectData.projects.map((project, index) => (
        <InfoCard
          key={index}
          img={project.img}
          title={project.title}
          techStacks={project.techStacks}
          projectInfo={project.projectInfo}
          githubLink={project.githubLink}
        ></InfoCard>
      ))}
    </>
  );
};

export default InfoCards;
