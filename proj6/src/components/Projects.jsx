function Projects({ projects, choseProjectHandler }) {
  return (
    <ul className="py-8 px-16 border-b-2">
      {projects.map((proj, index) => {
        return (
          <li key={proj.title}>
            <button onClick={() => choseProjectHandler(index)}>{proj.title}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Projects;
