const addBtn =document.querySelector('#btnAddItem')
const deleteBtn=document.querySelector('.delete')
const sortBtn =document.querySelector("#btnSortItem")
const Input=document.querySelector('#taskUpdate')
const Display=document.querySelector('#display')

let List=[];
let Delete;

addBtn.addEventListener('click',(event)=>{

            //empty task value
            if (Input.value.length == 0){
                alert("Please enter a new task")
            }
            // Short task value
            else if ((document.querySelector('#taskUpdate').value.length<=3)){
                alert("Please enter a longer task name")
            }
            else{

                let name=document.querySelector('#taskUpdate').value
                let newName=name.charAt(0).toUpperCase()+name.slice(1)

                todoList.push(
                {
                id:List.length+1,
                name:newName,
                completed:false,
                date:new Date(),
                })
    }
    displayList()
})

function displayList(){
    todoList.forEach((item)=>{
        resultDisplay.innerHTML+=
        `
        <div class="todoItem">
        <input type="checkbox" id="completed${item.id}" class="todo-item-checkbox"
        <p>${item.name}</p>
        <div class="buttons">
        <button id="close-btn${item.id}" class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button id="close-btn${item.id}" class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        </div>
        `
    })
}
deleteBtn.addEventListener('click', deleteTask){
    function deleteTask(){
        index=List.indexOf()
            
            if (index>-1){
                List.splice(index,1) 
            }
        
        }
};

sortBtn.addEventListener('click',(event)=>{
    todoList=todoList.sort((a,b)=>{
        if (a.name<b.name) {
            return -1
        } else {
            return 1
        }
        return 0;
    })
    ();
})

// function addTask (){
        
//     // Empty task field
//     
//     else{   
        
//         //Make first letter of task capital 
//        
        
//         //Create newTask object
//         let newTask={
//             id:id,
//             name:newName,
//             createdDate:date,
//             completed:false,
//         }
//         tasks.push(newTask)
        
//         //display Tasks
//         let output=document.getElementById('display')
//         output.innerHTML = ""
//         tasks.forEach((tasks) => {
//         output.innerHTML +=
//         `
//         <li>
//         <input type="checkbox">
//         <label for="">${tasks.name}</label>
//         <div class="buttons">
//         <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
//         <button class="delete"></button>
//         </div>
//         </li>
//         `
//         })
//         console.log(tasks);
//        localStorage.setItem('data', JSON.stringify(tasks))
//     }
// }
// function deleteTask(){
//     tasks = JSON.parse(localStorage.tasks);
//     tasks.splice(id-1,1);
//     localStorage.tasks = JSON.stringify(tasks);
    
//     let output=document.getElementById('display')
        
//         output.innerHTML = ""
        
//         tasks.forEach((tasks) => {
//         output.innerHTML +=
//         `
//         <li>
//         <input type="checkbox">
//         <label for="">${tasks.name}</label>
//         <div class="buttons">
//         <button class="delete"><i class="fa-solid fa-trash"></i></button>
//         </div>
//         </li>
//         `
//         })
// }
// document.querySelector('#btnAddItem').addEventListener("click",addTask)
// document.querySelector('.delete').addEventListener("click",deleteTask)

    
// function sort(){}

// let checkbox = document.querySelector('');
//     if (checkbox.checked) {


// }


