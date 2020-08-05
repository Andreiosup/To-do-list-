const todoInputs=document.querySelector('#to-do-input');
const todoList=document.querySelector('.to-do-list');
const todoButton=document.querySelector('#to-do-button');

todoButton.addEventListener('click', addlist);
todoList.addEventListener('click', checkordelete)


function addlist (e){
    e.preventDefault();
    if(todoInputs.value==="")return;
    
    const toDo_div=document.createElement('div');
    const item=document.createElement('li');
    const checkButton=document.createElement('button');
    const deleteButton=document.createElement('button');
    

    toDo_div.classList.add('todo');
    item.classList.add('to-do-item');
    checkButton.classList.add('check-button');
    deleteButton.classList.add('delete-button');

    item.innerHTML=todoInputs.value;
    checkButton.innerHTML='Check';
    deleteButton.innerHTML='Delete';
    
    toDo_div.appendChild(item);
    toDo_div.appendChild(checkButton);
    toDo_div.appendChild(deleteButton);
    todoList.appendChild(toDo_div);

    todoInputs.value="";
}
function checkordelete(e){
   const del=document.querySelector('.delete-button');
   const check=document.querySelector('.check-button');
   const text=document.querySelector('.todo li')

    if(e.target==check){
        text.style.textDecoration='line-through';
    }else if(e.target==del){
        todo=del.parentElement;
        todo.remove();
    }
}

