 let taskList= document.getElementById('taskList');
 let addTask=document.getElementById('addTask');
 
 function addTask(){
  let taskInput=document.getElementById ('taskInput');
  let taskText=taskInput.value;
  if(taskText===""){
   return;
  }
}    
    let li=document.createElement('li')
    li.innerHTML=taskText;
    
    let editButton=document.createElement('button')
    editButton.innerHTML='<ion-icon name="pencil-outline"></ion-icon>'
    editButton.onclick=function(){
      editTask(li)
    }
    let deleteButton=document.createElement('button')
    deleteButton.innerHTML=<ion-icon name="trash-outline"></ion-icon>
    deleteButton.onclick=function(){
      deleteTask(li)
    }
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li)
    taskInput.value="";
 
 function editTask(task){
  let taskTextElement=task.firstChild;
  let taskText=taskTextElement.textContent;

  let newTaskText=prompt('modifier la tache',taskText)
  if(newTaskText===null||newTaskText===""){
    return;
  }
  taskTextElement.textContent=newTaskText

  function.deleteTask(task){
    taskList.removeChild(task);
  }

  addTaskBtn.addEventListener('click',addTask);
  taskInput.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
      addTask();
    }
  })
 };