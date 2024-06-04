import React, { useState } from "react";

import AddProject from "./components/AddProject";
import Project from "./components/Project";
import Projects from "./components/Projects";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Test",
      dueDate: "Dec 29, 2024",
      tasks: ["Task1", "Task2", "Task3"],
    },
  ]);
  const [currentProject, setCurrentProjects] = useState(0);
  
  function addTask(project, task) {
    setProjects((prevProjects) => {
      const newProjects = prevProjects.map((proj) => {
        if (proj === project) {
          proj.tasks.push(task.current.value);
        }
        return proj;
      })
      task.current.value = '';
      return newProjects;
    });
  }

  return (
    <>
      <AddProject addProjectHandler={setProjects} />

      <Projects projects={projects} choseProjectHandler={setCurrentProjects} />

      <Project project={projects[currentProject]} addProjectTask={addTask} />
    </>
  );
}

export default App;
