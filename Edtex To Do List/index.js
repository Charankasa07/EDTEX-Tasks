function addTask(){
    const task = document.getElementById("input");
    const text = task.value.trim()
    if(text!==''){
        const new_div = document.createElement('div');
        const para = document.createElement('p');
        const new_text = document.createTextNode(text)
        para.appendChild(new_text);
        new_div.appendChild(para);
        const button = document.createElement("button");
        const button_text = document.createTextNode("Mark as Done");
        button.appendChild(button_text)
        new_div.appendChild(button)
        new_div.classList.add("task")
        button.classList.add("button")
        const task_div = document.getElementById("list-of-tasks")
        task_div.appendChild(new_div)
        button.addEventListener("click",markAsDone)
        task.value=""
        const message = document.getElementById("message")
        message.innerHTML="Task added Succesfully"
        message.style.visibility = "visible"
        message.classList.remove("error")
        message.classList.add("success")
        setTimeout(() => {
            message.style.visibility = "hidden"
        }, 2000);
    }
    else{
        task.innerHTML=""
        const message = document.getElementById("message")
        message.innerHTML="Please enter a valid Task Name!"
        message.style.visibility = "visible"
        message.classList.add("error")
        message.classList.remove('success')
        setTimeout(() => {
            message.style.visibility = "hidden"
        }, 2000);
}
}
function markAsDone(){
    const task=this.previousElementSibling
    task.classList.add("done")
    const button = this
    button.innerText = "Delete"
    // button.style.display = "none"
    const parent = this.parentElement
    const undo_button = document.createElement("button")
    undo_button.innerText = "Undo"
    undo_button.classList.add("button")
    button.addEventListener("click",deleteTask)
    parent.appendChild(button)
    parent.appendChild(undo_button)
    undo_button.addEventListener("click",undoTask)
}
function deleteTask(){
    const parent = this.parentElement
    parent.remove()
}
function undoTask(){
    const deleteButton = this.previousElementSibling
    const task = deleteButton.previousElementSibling
    task.classList.remove("done")
    deleteButton.remove()
    this.innerText = "Mark as Done"
    this.addEventListener("click",markAsDone)
}
