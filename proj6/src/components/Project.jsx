import { useRef } from "react";
import Input from "./Input";

function Project({ project, addProjectTask }) {
  const task = useRef();

  return (
    <div className="py-8 px-16">
      <h2>{project.title}</h2>
      <p>{project.dueDate}</p>
      <div className="tasks">
        <div className="add-task">
            <Input ref={task} type="text" required />
            <button onClick={() => addProjectTask(project, task)}>Add task</button>
        </div>
        <ul>
          {project.tasks.map((task, index) => {
            return (
              <li key={task + index}>
                <div className="flex">
                  <p>{task}</p>
                  <button>Clear</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Project;
