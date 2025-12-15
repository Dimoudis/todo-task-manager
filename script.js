// fishing elements  
const input = document.getElementById("task-input");
const addbutton = document.getElementById("add-btn");
const list = document.getElementById('task-list');

const tasks = []; // tasks array

// render function 
function renderTasks() {
    list.innerHTML = ''; // clear list (ul)
    //for every task in array
    tasks.forEach(task => { 
        const li = document.createElement('li'); // create a new li
        li.textContent = task.text;              // it puts the text in li

        // toggle done with click
        li.addEventListener('click', () => {
            task.done = !task.done; //switch true-false
            renderTasks();
        });

        // if its done -> line-through
        if (task.done) li.style.textDecoration = 'line-through';

        list.appendChild(li);  //add li in ul
    });
}

// add button
addbutton.addEventListener('click', () => {
    const text = input.value.trim();// 'text' without extra spaces
    if (text === '') return;        // if it's empty, we stop 

    tasks.push({ text: text, done: false });

    input.value = ''; //clear user input
    renderTasks();
});

// sorting A-Z
const sortButton = document.getElementById("sort-btn");
sortButton.addEventListener('click', () => {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    renderTasks();
});