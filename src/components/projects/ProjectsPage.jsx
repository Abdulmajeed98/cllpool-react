import React from "react";
import ProjectsPageCard from "./ProjectsPageCard";
import data from "../../data.json";
import SectionTitle from "../global/SectionTitle";

const ProjectsPage = () => {
  const projectsData = data.projectsData;
  window.scrollTo(0, 0);
  return (
    <div className="mt-nav-offset px-sides py-8">
      <SectionTitle title={"Explore all our projects"} />
      <div className="grid grid-cols-4 gap-x-4 gap-y-8">
        {projectsData.map((element) => (
          <ProjectsPageCard key={element.id} projectId={element.id} projectName={element.name} projectImg={element.img} height="h-96" />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
