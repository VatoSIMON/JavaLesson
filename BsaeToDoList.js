// Sélectionner des élément de DOM//
const taskInput=document.getElementById('taskInput');
const addTaskBtn=document.getElementById('addTaskBtn');
const taskList=document.getElementById('taskList');
//Fonction pour ajouter une tache//
 
  const taskText = taskInput.Value;
  if(taskText === ''){
    alert('Veuillez  entrer une tache');
    
  }
//Créer un nouvel élément de tache//
const taskItem = document.createElement('li');
taskItem.className ='task';

const taskContent = document.createElement('span');
taskContent.textContent = 'taskText';

//bouton pour marquer comme terminer//
const completeBtn = document.createElement('button');
completeBtn.taskContent = 'Terminer';
completeBtn.addEventListener('click',()=>{
  taskContent.classList.toggle('completed');
});

//bouton pour supprimer//
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Supprimer';
deleteBtn.addEventListener('click',()=>{
taskList.removeChild(taskItem);
});

//Ajouter les éléments au DOM//
 taskItem.appendChild(taskContent);
 taskItem.appendChild(completeBtn);
 taskItem.appendChild(deleteBtn);
 taskList.appendChild(taskItem);

 //Réinitialiser le champ de saisie//
 taskInput.value = '';
 

 // Ajouter un événement au bouton//
addTaskBtn.addEventListener('click');

//Ajouter une tache en appyant sur Entrée//
taskInput.addEventListener('Keypress',(e)=>{
  if (e.key === 'Entrer'){
    addTask();
  }
});

 