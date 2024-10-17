import { useState } from 'react';
import "./tasks.css";

export const Tasks = () => {
    let [tasks, setTask] = useState([
        "Reading my scripture",
        "Watching movies",
        "going to the gym"
      ])
    
    //   function add(){}
  return (
        <>
            <h1>My Task ...</h1>
            <section className='insertTask' >
                <input type="text" placeholder='Insert Your Task'/>
                <button onClick={() => setTask()}>ADD</button>
            </section>
            <section className='task'>
                <h2>Task List</h2>
                <ul className='taskList'>
                {tasks.map((task) => 
                    (
                        <li>
                        <p>{task}</p>
                        <button>DELETE</button>
                    </li>
                    ))
                }
                </ul>      
            </section>  
        </>
    )
      
}
