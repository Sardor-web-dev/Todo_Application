function reload(arr, place) {
    for (let item of arr) {
        const task = document.createElement('div');
        const taskName = document.createElement('div');
        const checkBox = document.createElement('input');
        const smth = document.createElement('div');
        const title = document.createElement('p');
        const date = document.createElement('span');
        const btns = document.createElement('div');
        const btnChange = document.createElement('button');
        const btnChangeImg = document.createElement('img');
        const btnDelete = document.createElement('button');
        const btnDeleteImg = document.createElement('img');

        task.classList.add('task');
        taskName.classList.add('task_name');
        smth.classList.add('smth');
        date.classList.add('due-date');
        btns.classList.add('btns');
        btnChange.classList.add('save');
        btnDelete.classList.add('delete');
        btnChangeImg.src = './assets/icons8-backspace-50.png';
        btnDeleteImg.src = './assets/icons8-delete-24.png';

        checkBox.setAttribute("type", "checkbox");

        title.innerHTML = item.title;
        date.innerHTML = `Due: ${item.date}`;
        checkBox.checked = item.isDone;


        btnChange.append(btnChangeImg);
        btnDelete.append(btnDeleteImg);
        btns.append(btnChange, btnDelete);
        smth.append(title, date);
        taskName.append(checkBox, smth);
        task.append(taskName, btns);
        place.append(task);
    }
}

function reloadCard(arr) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
    for (let item of arr) {
        const todoCategory = document.createElement('div');
        const taskList = document.createElement('div');
        const title = document.createElement('h3');
        const count = document.createElement('span');

        todoCategory.classList.add('todo-category');
        taskList.classList.add('task-list');
        title.classList.add('category-title');
        count.classList.add('task-count');

        title.innerHTML = item.title;
        count.innerHTML = item.tasks.length;

        title.append(count);
        reload(item.tasks, taskList);
        todoCategory.append(title, taskList);
        mainContent.append(todoCategory);
    }
}