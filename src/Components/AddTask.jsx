import React, { useState } from 'react' ; 

export const AddTask =(props) => {
    const [taskname , setTaskname] = useState("") ; 
    const submit =(e) => {
        e.preventDefault() ;
        if(!taskname){
            alert("Task cannot be empty"); 
        }
        else{
        props.addTask(taskname);
        setTaskname("");
        }
    }

    return (
        
        <div className="container mb-3 my-5">
                <form onSubmit={submit}> 
                <div className="container">
                 <textarea className="form-control my-3" value={taskname} onChange={(e) =>setTaskname(e.target.value) } aria-label="With textarea"></textarea>
                 <button className="btn btn-primary mx-2" > Add to List</button>
                 </div>
                </form>
        </div>
    )
}