import "../App.css";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function TaskList(props) {
  const [pos, setPos] = useState("");
  const [newsubtask, setNewSubTask] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!newsubtask) {
      alert("Sub Task cannot be empty");
    } else {
      console.log(newsubtask);
      console.log(pos);
      props.addNewSubTask(newsubtask, pos);
      setNewSubTask("");
      setPos("");
    }
  };
  const listTasks = props.myTask.map((list) => (
    <div key={list.taskid} className="container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {list.status !== "N" ? (
              <input
                className="form-check-input mx-3"
                onClick={() => {
                  props.onTaskComplete(list, list.taskid);
                }}
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked
              />
            ) : (
              <input
                className="form-check-input mx-3"
                onClick={() => {
                  props.onTaskComplete(list, list.taskid);
                }}
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            )}
            {list.taskname}
            {list.status !== "N" ? (
              <p className="rightalign">
                {" "}
                {list.subtask.length +
                  " of " +
                  list.subtask.length +
                  " completed"}
              </p>
            ) : (
              <p className="rightalign" key={list.subTaskid}>
                {" "}
                {props.taskCount + " of " + list.subtask.length + " completed"}
              </p>
            )}
            <h5>
              {list.status !== "N" ? (
                <span class="badge bg-secondary">Completed</span>
              ) : (
                ""
              )}
            </h5>
          </Accordion.Header>

          <Accordion.Body>
            {list.subtask.map((sublist) => (
              <div key={sublist.subTaskid}>
                <ul className="list-group">
                  <li className="list-group-item">
                    {sublist.status !== "N" || list.status !== "N" ? (
                      <input
                        className="form-check-input mx-3"
                        onClick={() =>
                          props.onSubComplete(
                            sublist,
                            list.taskid,
                            sublist.subTaskid
                          )
                        }
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        checked
                      />
                    ) : (
                      <input
                        className="form-check-input mx-3"
                        onClick={(e) => {
                          props.onSubComplete(
                            sublist,
                            list.taskid,
                            sublist.subTaskid
                          );
                        }}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    )}
                    {sublist.subtaskname}
                  </li>
                </ul>
              </div>
            ))}
            <form onSubmit={submit}>
              <div className="input-group mb-3">
                <input type="hidden" value={pos} name="hidden" />
                <input
                  type="text"
                  className="form-control"
                  value={newsubtask}
                  onChange={(e) => {
                    setNewSubTask(e.target.value);
                    setPos(list.taskid);
                  }}
                  placeholder=""
                  aria-label="Example text with two button addons"
                />
                <button className="btn btn-success btn-md" value="submit">
                  Submit
                </button>
              </div>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  ));

  return (
    <>
      <p> {listTasks} </p>
    </>
  );
}

export default TaskList;
