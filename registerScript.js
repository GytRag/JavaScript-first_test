const navLogin = document.querySelector('.navLogin')
const errorRegister = document.querySelector('.errorRegister')

const inputRegister = document.querySelectorAll('input')
const btnRegister = document.querySelector('.btnRegister')


let users = JSON.parse(localStorage.getItem('users'))

if (users === null) {
    users = [];
}
console.log(users)

navLogin.onclick = () => {
    window.location.href = 'login.html';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

btnRegister.onclick = () => {
    if (!validateEmail(inputRegister[0].value)){
        errorRegister.innerText = 'Wrong email';
    }else {
        if (inputRegister[1].value.length <= 4){
            errorRegister.innerText = 'Password to short, password length must be between 4 and 20 characters';
        }else if (inputRegister[1].value.length > 20){
            errorRegister.innerText = 'Password to long, password length must be between 4 and 20 characters';
        }else if (inputRegister[1].value !== inputRegister[2].value){
            errorRegister.innerText = 'Password 1 and password 2 do not match';
        }else {
            users.push({email:inputRegister[0].value, password:inputRegister[1].value, img:'https://cdn-icons-png.flaticon.com/512/21/21104.png'});
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = 'login.html';
        }
    }
}