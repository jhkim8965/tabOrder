const $menuForm = document.getElementById('menu-form');
const $menuInput = $menuForm.querySelector('#menu-input');
const $menuList = document.getElementById('menu-list');

const MENU_KEY = 'menulist';

let menuList = [];

const savedToDos = localStorage.getItem(MENU_KEY);
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    menuList = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

$menuForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newMenu = $menuInput.value;
    $menuInput.value = '';

    const newMenuObj = {
        id: Date.now(),
        text: newMenu,
        done: '',
    };
    console.log(newMenuObj);
    menuList.push(newMenuObj);
    paintToDo(newMenuObj);
    // saveToDos();
});

function paintToDo(newMenu) {
    const $li = document.createElement('li');
    $li.id = newMenu.id;

    const doneYn = newMenu.done;
    const $span = document.createElement('span');
    $span.innerText = newMenu.text;
    if(doneYn === 'Y') {
        $span.classList.add('done');
    }
    $li.appendChild($span);

    const $div = document.createElement('div');
    const $doneIcon = document.createElement('ion-icon');
    $doneIcon.name = 'checkmark-outline';
    $doneIcon.classList.add('icon');
    $doneIcon.addEventListener('click', doneToDo);
    $div.appendChild($doneIcon);
    const $deleteIcon = document.createElement('ion-icon');
    $deleteIcon.name = 'trash-outline';
    $deleteIcon.classList.add('icon');
    $deleteIcon.addEventListener('click', deleteToDo);
    $div.appendChild($deleteIcon);
    $li.appendChild($div);
    
    $menuList.appendChild($li);
}

function doneToDo(event) {
    const $li = event.target.parentElement.parentElement;
    const $span = $li.querySelector('span');
    $span.classList.toggle('done');

    menuList.forEach(todo => {
        if(todo.id === parseInt($li.id)) {
            todo.done = todo.done === 'Y' ? 'N' : 'Y';
        }
    });;
    saveToDos();
}

function deleteToDo(event) {
    const $li = event.target.parentElement.parentElement;
    $li.remove();

    menuList = menuList.filter(todo => todo.id !== parseInt($li.id));
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(MENU_KEY, JSON.stringify(menuList));
}