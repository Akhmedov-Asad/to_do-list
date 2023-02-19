let input = document.querySelector('#input'),
    addTask = document.querySelector('#add'),
    deleteTask = document.querySelector('#delete'),
    list = document.querySelector('#list');

addTask.addEventListener('click', function () {
    if (input.value === '') return
    add()
    input.value = ''

})

function add() {
    const li = document.createElement('li');
    list.appendChild(li);
    li.textContent = input.value;

    deleteTask.addEventListener('click', function(){
        list.removeChild(li)
    })
}