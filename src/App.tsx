import { useState } from "react";
import NavBar from "./components/navigation-bar/NavBar";
import Profile from "./components/profile/Profile";
import InfoCard from "./components/card/InfoCard";
import projectData from "./data/projects.json";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Profile></Profile>
      {projectData.projects.map((project, index) => (
        <InfoCard
          img={project.img}
          title={project.title}
          techStacks={project.techStacks}
          projectInfo={project.projectInfo}
        ></InfoCard>
      ))}
    </>
  );
}

export default App;
