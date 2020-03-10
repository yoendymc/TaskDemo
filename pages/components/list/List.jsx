import { useContext } from "react";

import listCss from "./list.module.css";
import Task from "../task/Task";
import { TaskContext } from "../TaskLayout";

const List = () => {
  const taskContext = useContext(TaskContext);

  return (
    <div>
      <table className={listCss.table}>
        <thead className={listCss.thead}>
          <tr className={listCss.tr}>
            <th className={listCss.th}>ID</th>
            <th className={listCss.th}>Name</th>
            <th className={listCss.th}>Description</th>
            <th className={listCss.th}>Time</th>
            <th className={listCss.th}>Action</th>
          </tr>
        </thead>
        <tbody className={listCss.tbody}>
          {taskContext.listTask.map((l, k) => (
            <Task key={k} classTr={listCss.tr} classTd={listCss.td} data={l} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
