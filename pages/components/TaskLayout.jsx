import { useState } from "react";

import FormTask from "./form/Form";
import List from "./list/List";

export const TaskContext = React.createContext({});

const TaskLayout = () => {
  const [listTask, setListTask] = useState([]);
  const [element, seElement] = useState({});

  const onAddTask = data => {
    if (data.id.value) {
      const newList = listTask.map(l => {
        if (+l.id === +data.id.value) {
          return {
            ...l,
            name: data.name.value,
            description: data.description.value,
            time: data.time.value
          };
        }
        return l;
      });
      setListTask(newList);
    } else {
      setListTask([
        ...listTask,
        {
          name: data.name.value,
          description: data.description.value,
          time: data.time.value,
          id: listTask.length + 1
        }
      ]);
    }
    seElement({});
  };

  const onSelectElement = data => {
    seElement(data);
  };

  const onDeleteElement = id => {
    setListTask(listTask.filter(l => +l.id !== +id));
  };

  return (
    <TaskContext.Provider
      value={{ onAddTask, listTask, onDeleteElement, onSelectElement }}
    >
      <FormTask defaultValue={element} />
      <List />
    </TaskContext.Provider>
  );
};

export default TaskLayout;
