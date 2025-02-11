const openModalBtn = document.querySelector('#openModal')
const openCardModal = document.querySelector('#openCardModal')
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const main = document.querySelector('.main-content')
const taskList = document.querySelector('.task-list')

openModalBtn.onclick = () => {
    modal.classList.remove('hidden');
    document.querySelector('form[name="addTask"]').classList.remove('hidden');
    document.querySelector('form[name="addCard"]').classList.add('hidden');
}


openCardModal.onclick = () => {
    modal.classList.remove('hidden');
    document.querySelector('form[name="addTask"]').classList.add('hidden');
    document.querySelector('form[name="addCard"]').classList.remove('hidden');
}

closeModal.onclick = () => {
    modal.classList.add('hidden');
}
const tasks = [
    {
        id:1,
        title:"Learn Js",
        isDone: false,
        date:"2024-12-05"
    },
    {
        id:2,
        title:"Learn Html",
        isDone: true,
        date:"2024-03-4"
    },
    {
        id:3,
        title:"Learn CSS",
        isDone: true,
        date:"2024-04-15"
    },
    {
        id:4,
        title:"Learn Backend",
        isDone: false,
        date:"2025-06-05"
    },
    {
        id:5,
        title:"Learn React",
        isDone: false,
        date:"2025-03-10"
    },
];
function reload() {
    for(let item of tasks) {
                const task = document.createElement('div');
                const taskName = document.createElement('div');
                const checkBox= document.createElement('input');
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
        
                checkBox.setAttribute ( "type","checkbox");
        
                title.innerHTML = item.title;
                title.innerHTML = item.title;
                date.innerHTML = `Due: ${item.date}`;
                if(item.isDone) {
                    checkBox.checked = true;
                }
        
                btnChange.append(btnChangeImg);
                btnDelete.append(btnDeleteImg);
                btns.append(btnChange,btnDelete);
                smth.append(title, date);
                taskName.append(checkBox,smth);
                task.append(taskName,btns);
                taskList.append(task);
    }

}
reload();


