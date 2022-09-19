import "./App.css";
import TaskList from "./Components/TaskList";
import { AddTask } from "./Components/AddTask";
import { useState } from "react";
var counter = 1;
function App() {
  const [taskCount, setTaskCount] = useState(0);
  const onTaskComplete = (task, pos) => {
    let newArr = [...myTask];
    for (var i = 0; i < newArr.length; i++) {
      if (newArr[i].taskid === task.taskid) {
        newArr[i].status = "Y";
        for (var j = 0; j < newArr[i].subtask.length; j++) {
          newArr[i].subtask[j].status = "Y";
        }
      }
    }
    setTask(newArr);
  };

  const onSubComplete = (subtask, pos, subtaskpos) => {
    let newArr = [...myTask];
    for (var i = 0; i < newArr.length; i++) {
      if (newArr[i].taskid === pos) {
        for (var j = 0; j < newArr[i].subtask.length; j++) {
          if (newArr[i].subtask[j].subTaskid === subtaskpos) {
            newArr[i].subtask[j].status = "Y";
            setTaskCount(counter);
          }
        }
        if (counter < newArr[i].subtask.length) {
          counter++;
        }
      }
    }

    setTask(newArr);
  };
  const [myTask, setTask] = useState([
    {
      taskid: 1,
      taskname: "This is Task -1",
      status: "Y",
      subtask: [
        { subTaskid: 1, subtaskname: "subtask -1 ", status: "N" },
        { subTaskid: 2, subtaskname: "subtask -2 ", status: "N" },
        { subTaskid: 3, subtaskname: "subtask -3 ", status: "N" },
      ],
    },
    {
      taskid: 2,
      taskname: "This is Task -2",
      status: "N",
      subtask: [
        { subTaskid: 1, subtaskname: "subtask -1 ", status: "N" },
        { subTaskid: 2, subtaskname: "subtask -2 ", status: "N" },
        { subTaskid: 3, subtaskname: "subtask -3 ", status: "N" },
      ],
    },
    {
      taskid: 3,
      taskname: "This is Task -3",
      status: "N",
      subtask: [
        { subTaskid: 1, subtaskname: "subtask -1 ", status: "N" },
        { subTaskid: 2, subtaskname: "subtask -2 ", status: "N" },
        { subTaskid: 3, subtaskname: "subtask -3 ", status: "N" },
      ],
    },
  ]);

  const addNewSubTask = (task, pos) => {
    var updatetask = myTask[pos - 1];
    var updatesubTask = myTask[pos - 1].subtask;

    var newsubCounter =
      updatetask.subtask[updatetask.subtask.length - 1].subTaskid + 1;

    const tempsub_obj = {
      subTaskid: newsubCounter,
      subtaskname: task,
      status: "N",
    };
    updatetask.subtask.push(tempsub_obj);

    myTask.splice(pos - 1, 1, updatetask);
  };

  const addTask = (taskname) => {
    var temptaskid = myTask[myTask.length - 1].taskid + 1;
    const temp_obj = {
      taskid: temptaskid,
      taskname: taskname,
      status: "N",
      subtask: [],
    };
    setTask([...myTask, temp_obj]);
  };
  return (
    <div className="App">
      <h1> ToDo List </h1>
      <AddTask addTask={addTask} />
      <TaskList
        myTask={myTask}
        addNewSubTask={addNewSubTask}
        onTaskComplete={onTaskComplete}
        onSubComplete={onSubComplete}
        taskCount={taskCount}
      />
    </div>
  );
}

export default App;
