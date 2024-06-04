import { useRef } from "react";
import Input from "./Input";

function formatDate(date) {
  const month = date.toLocaleDateString("en-us", { month: "short" });
  const day = date.toLocaleDateString("en-us", { day: "numeric" });
  const year = date.toLocaleDateString("en-us", { year: "numeric" });
  return `${month} ${day}, ${year}`;
}

function AddProject({ addProjectHandler }) {
  const title = useRef();
  const dueDate = useRef();

  function addProject(e) {
    e.preventDefault();
    addProjectHandler((prevProjects) => {
      const formattedDate = formatDate(new Date(dueDate.current.value));
      const project = [
        ...prevProjects,
        {
          title: title.current.value,
          dueDate: formattedDate,
          tasks: [],
        },
      ];
      //e.target.reset();
      return project;
    });
  }

  return (
    <form onSubmit={addProject} className="py-8 px-16 border-b-2">
      <Input ref={title} label="Title" type="text" required />
      <Input ref={dueDate} label="Due date" type="date" />
      <input type="reset" value="Reset" />
      <button>Add</button>
    </form>
  );
}

export default AddProject;
