const taskAdder = document.querySelector('.taskAdder');
const myTasksContainer = document.querySelector('.myTasks');

const tasks = JSON.parse(localStorage.getItem('taskList')) || [];

taskAdder.addEventListener('submit', addTask);
myTasksContainer.addEventListener('click', toggleDone);
renderTasks();

function addTask(e){
    e.preventDefault();
    const textTask = this.querySelector('[name=task]').value;
    const task = {
        textTask,done:false
    }
    tasks.push(task);
    saveStorage();
    renderTasks();
    this.reset();
}

function saveStorage(){
    localStorage.setItem('taskList' , JSON.stringify(tasks));
}

function renderTasks() {
    let html = tasks.map(function(data,i) {
        let myClass = data.done ? 'done' : '';
        return '<li data-index='+i+'><div class="'+myClass+'">'+
            data.textTask+'<span class="remove">  X</span></div></li>';
    })
    myTasksContainer.innerHTML = html.join('');
}

function toggleDone(e) {
    const myEl = e.target;
    const mySel = myEl.parentElement;
    if(myEl.className === 'remove') {
        let index = mySel.parentElement.dataset.index;
        let temp = tasks.splice(index,1);
    } else {
        myEl.classList.toggle('done');
        tasks[mySel.dataset.index].done = !tasks[mySel.dataset.index].done;
    }
    saveStorage();
    renderTasks();
}

