import './App.css';
import React, { useState } from 'react'
import Modal from './components/Modal';
import TodoList from './components/TodoList';









function App() {
const init = {
  id:"",
  task:"",
  type:0,
  isImportant: false,
  isDone: false, 
};



const [task, setTask] = useState('')
const [tasks, setTasks] = useState([])
const [doneTotal, setDoneTotal] = useState(0);
const [input, setInput] = useState("");
const [modal, setModal] = useState(false);
const [taskObj, setTaskObj] = useState(init);
const newArr  = "";




//add task
const addTask = (e) =>{
  console.log(taskObj);

  const newArr = [...tasks]
  newArr.push({...taskObj, id: tasks.length });
  setTasks(newArr);
  
  // setTask('')
  setModal(false);
  setTaskObj(init)
}
// else{
//   tasks.map((a) => {
//     if(a.id === input){
//       a.title = task
//     }
//     setTasks(tasks);
//     setTask("");
//     setInput("");
//     setModal(false)
//   })
// }
// };


const onDoneTask = (id)=> {
  const objList = tasks.map((val)=>{
    if(val.id === id){
      val.isDone = !val.isDone

      setDoneTotal(doneTotal + 1);
    }
    return val;
  })

  setTasks(objList)
  ShowDoneTotal();

};


function ShowDoneTotal() {
  const arr = tasks.filter(e => e.isDone === true);

  setDoneTotal(arr.length);
}


//edit item
function editTask(id){
  tasks.map((e)=> {
    if(e.id === id){
     
      setTaskObj({...taskObj, task : e.task})
      // setInput(id)
      setModal(true)
    }})
};

//delete item
function deleteItem (id){
  const removeItem = tasks.filter((e) => {
    return e.id !== id;
  });

  setTasks(removeItem)
  ShowDoneTotal(newArr);
}


const handleModal = () => {
  setModal(!modal);
}




return (
    <div className="container">
      <div>
        <div>
          <h1>Todo List</h1>
          <div> Total {tasks.length}</div>
          <div> Done {doneTotal}</div>
          <button className='btn btn-primary' onClick={setModal}>
            +Add Task
          </button>
        </div>


        <TodoList 
          tasks={tasks}
          deleteItem={deleteItem}
          editTask={editTask}
          onDoneTask={onDoneTask}
          // input={input}
        />
      </div>
      <div>
        {modal && (
          <Modal 
            modal={modal}
            setModal={handleModal}
            addTask={addTask}
            taskObj={taskObj}
            setTaskObj = {setTaskObj}
          />
        )}
      </div>
    </div>
  );
}

export default App;
