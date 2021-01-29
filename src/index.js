document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById('new-button')
  const taskList = document.getElementById('tasks')
  addTaskBtn.addEventListener('click', handleSubmit)



  function handleSubmit(event){
    console.log('in handle submit function');
    event.preventDefault();
    const task = document.getElementById("new-task-description");
    const li = document.createElement("li");
    li.innerText = task.value
    taskList.append(li)
    document.getElementById("new-task-description").value = "";

    


    

}
});
