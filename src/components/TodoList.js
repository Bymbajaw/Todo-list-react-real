

export default function TodoList({
tasks,
onDoneTask,
editTask,
deleteItem,
}) {

    console.log(tasks);
    return(
        <>
            <div 
                className='row mt-4'>
            </div>
            <div className='row mt-3'>
                <div className='col-md-12'>
                    {tasks && tasks.map((e) => (
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <div className='d-flex'>
                                <input
                                    type="checkbox"
                                    className='checkbox'
                                    checked={e.isDone}
                                    onChange={() => onDoneTask(e.id)} />
                                {/* <input value={input} type='hidden' /> */}
                                <h4>{e.task}</h4>

                            </div>
                            <div className='row col-md-4 col-sm-4 col-5 justify-content-between'>
                                <button className='btn btn-warning col-md-5 col-5 col-sm-5' onClick={() => editTask(e.id, e.task, e.isDone, e.type, e.isImportant)}>Edit</button>
                                <button className='btn btn-danger col-md-6 col-5 col-sm-5' onClick={() => deleteItem(e.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}