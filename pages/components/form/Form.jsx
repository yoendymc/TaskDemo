import { useContext } from "react";

import formCss from "./form.module.css";
import { TaskContext } from "../TaskLayout";

const FormTodo = ({ defaultValue }) => {
  const taskContext = useContext(TaskContext);

  const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    taskContext.onAddTask(form);
    form.reset();
  };

  return (
    <div className={formCss.formStyle}>
      <h1>Task</h1>
      <form onSubmit={onSubmit}>
        <input required
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={defaultValue.name}
        />
        <input required
          type="text"
          name="description"
          placeholder="Description"
          defaultValue={defaultValue.description}
        />
        <input required
          type="time"
          name="time"
          min="00:10"
          max="24:00"
          defaultValue={defaultValue.time}
        />
        <input type="hidden" name="id" defaultValue={defaultValue.id} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormTodo;
