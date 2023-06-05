let tasks=[];

function addTask (){
        
    // Empty task field
    if (document.querySelector('#taskUpdate').value.length == 0){
        alert("Please enter a new task")
    }
    // Short task value
    else if ((document.querySelector('#taskUpdate').value.length<=3)){
        alert("Please enter a longer task name")
    }
    else{   
        
        //Make first letter of task capital 
        let name=document.querySelector('#taskUpdate').value
        let newName=name.charAt(0).toUpperCase()+name.slice(1)
        let date= new Date();
        let id=tasks.length+1;
        
        //Create newTask object
        let newTask={
            id:id,
            name:newName,
            createdDate:date,
            completed:false,
        }
        tasks.push(newTask)
        
        //display Tasks
        let output=document.getElementById('display')
        output.innerHTML = ""
        tasks.forEach((tasks) => {
        output.innerHTML +=
        `
        <li>
        <input type="checkbox">
        <label for="">${tasks.name}</label>
        <div class="buttons">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        </li>
        `
        })
        console.log(tasks);
       localStorage.setItem('data', JSON.stringify(tasks))
    }
}
function deleteTask(){
    tasks = JSON.parse(localStorage.tasks);
    tasks.splice(id-1,1);
    localStorage.tasks = JSON.stringify(tasks);
    
    let output=document.getElementById('display')
        
        output.innerHTML = ""
        
        tasks.forEach((tasks) => {
        output.innerHTML +=
        `
        <li>
        <input type="checkbox">
        <label for="">${tasks.name}</label>
        <div class="buttons">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        </li>
        `
        })
}
document.querySelector('#btnAddItem').addEventListener("click",addTask)
document.querySelector('.delete').addEventListener("click",deleteTask)

    
// function sort(){}

// let checkbox = document.querySelector('');
//     if (checkbox.checked) {


// }


