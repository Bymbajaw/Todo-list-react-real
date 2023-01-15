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
// const [input, setInput] = useState("");
const [modal, setModal] = useState(false);
const [taskObj, setTaskObj] = useState(init);
const [ID, setId] = useState("0")
const newArr  = "";





//add task
const addTask = (e) =>{
  console.log(taskObj);

if(ID !== "0"){
  newArr.map((e) => {
    if( e.id === ID) {
      e.title = task
    }
    return e;
  });
} else{

}


const newArr = [...tasks]
newArr.push({...taskObj, id: createId() });
setTasks(newArr);


//edit
setTasks([...tasks, { ...taskObj, id: createId() }])
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
    }else {
      setDoneTotal(doneTotal -1);
    }
    return val;
  })

  setTasks(objList)
  ShowDoneTotal();

};


function ShowDoneTotal() {
  const arr = tasks.filter(e => e.isDone === true);
  
  // setDoneTotal(arr.length);
  doneTotalTask(newArr)
}


const doneTotalTask = (data) => {
  const lenArr = data.filter ((e) => e.isDone == true);
  setDoneTotal(lenArr.length)
}

//edit item
const editTask = ( id, task, isDone, type, isImportant) => {
  if(!isDone){
    setTaskObj({id, task, isDone, type, isImportant});
    setModal(true);
  }
  // tasks.map((e)=> {
  //   if(e.id === id){
     
  //     setTaskObj({...taskObj, task : e.task})
  //     // setInput(id)
  //     setModal(true)
  //   }})
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



function createId() {
  let abc = "ABCDEFJHJKLMNO";

  let num = "1234567890";

  console.log(Math.random(1 * 10));

  let newStr =
    abc.split("")[Math.floor(Math.random() * 10 + 1)] +
    abc.split("")[Math.floor(Math.random() * 10 + 1)] +
    abc.split("")[Math.floor(Math.random() * 10 + 1)];

  let newNumber =
    num.split("")[Math.floor(Math.random() * 10)] +
    "" +
    num.split("")[Math.floor(Math.random() * 10)] +
    "" +
    num.split("")[Math.floor(Math.random() * 10)];

  console.log(newStr + newNumber);

  return newStr + newNumber;
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
