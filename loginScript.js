

const inputLogin = document.querySelectorAll('input');
const errorLogin = document.querySelector('.errorLogin');


const navRegister = document.querySelector('.navRegister');
const btnLogin = document.querySelector('.btnLogin');

(()=> {
    const users = JSON.parse(localStorage.getItem('users'))
    const usersEmails = [];

    users.forEach(user => {
        usersEmails.push(user.email)
    })

    navRegister.onclick = () => {
        window.location.href = 'register.html';
    }

    btnLogin.onclick = () => {
        if(usersEmails.includes(inputLogin[0].value)){
            users.forEach(user => {
                if (user.email === inputLogin[0].value){
                    if (user.password !== inputLogin[1].value){
                        errorLogin.innerText = 'Wrong password';
                    }else {
                        localStorage.setItem('userEmail', inputLogin[0].value);
                        window.location.href = 'index.html';
                    }
                }
            })
        }else {
            errorLogin.innerText = 'User does not exist';
        }
    }
})()

