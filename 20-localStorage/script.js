// on Click of button username must get saved in local storage and whenever user comes to the page he should get that username

const submitButton = document.getElementById('submit-button')
const username = document.getElementById('username')
const usernameInput = document.getElementById('username-input')

const setData = () => {
    const val = usernameInput.value;
    localStorage.setItem('username', val);
    location.reload()
}

const getData = () => {
    const val = localStorage.getItem('username');
    username.innerText = val
}

submitButton.addEventListener('click', setData)

window.addEventListener('load', getData)