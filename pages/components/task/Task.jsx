import { useContext } from "react";

import taskCss from "./task.module.css";
import { TaskContext } from "../TaskLayout";

const Task = ({ classTr, classTd, data }) => {
  const taskContext = useContext(TaskContext);

  const onDelete = (event) => {
    event.stopPropagation();
    taskContext.onDeleteElement(data.id);
  };

  const onSelect = () => {
    taskContext.onSelectElement(data)
  };

  return (
    <tr className={classTr} onClick={onSelect}>
      <td className={classTd}>{data.id}</td>
      <td className={classTd}>{data.name}</td>
      <td className={classTd}>{data.description}</td>
      <td className={classTd}>{data.time}</td>
      <td className={classTd}>
        <div className={taskCss.action}>
          <div className={taskCss.close} onClick={onDelete} />
        </div>
      </td>
    </tr>
  );
};

export default Task;
