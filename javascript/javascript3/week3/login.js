const loginForm = document.getElementById('loginForm');
const userNameInput = document.getElementById('userName');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

const users = [{
        username: 'Javascript',
        password: '123456',
        email: 'javascript@outlook.com',
        userId: '001'
    },
    {
        username: 'JS',
        password: '654321',
        email: 'js@outlook.com',
        userId: '002'
    }
];

let foundUser = false;
const loginFunc = (users, e) => {

    e.preventDefault()
    const userNameValue = userNameInput.value;
    const passwordValue = passwordInput.value;
    const emailValue = emailInput.value;

    for (currentUser of users) {
        if (userNameValue === currentUser.username && passwordValue === currentUser.password && emailValue === currentUser.email) {
            foundUser = true;
            alert('log in successfully');
            window.location = './app.html';
            sessionStorage.setItem('userID', currentUser.userId);
        }
    }

    if (!foundUser) {
        alert("Invalid user name or password");
    }
}

loginForm.addEventListener('submit', (e) => loginFunc(users, e))