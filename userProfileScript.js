

const userProfileEmail = document.querySelector(".userProfile p");
const navEmail = document.querySelector(".navEmail span");
const section = document.querySelector("section");
const userImg = document.querySelector(".userImg");

const changeImg = document.querySelector(".changeImg");
const updatePassword = document.querySelector(".updatePassword");
const changeImgInput = document.querySelector(".changeImg input");
const updatePasswordInput = document.querySelectorAll(".updatePassword input");
const errorRegister = document.querySelector(".errorRegister");

const hamburgerMenu = document.querySelector("nav svg");
const hamburger = document.querySelector(".hamburger");

const userProfileBtn = document.querySelectorAll(".userProfile button");
const btnNav = document.querySelectorAll(".navIndex");
btnNav[0].onclick = () => {
    window.location.href = "index.html";
}
btnNav[1].onclick = () => {
    window.location.href = "gallery.html";
}
btnNav[2].onclick = () => {
    window.location.href = "chat.html";
}
btnNav[3].onclick = () => {
    window.location.href = "login.html";
    localStorage.removeItem("userEmail");
}

const users = JSON.parse(localStorage.getItem('users'));
const userEmail = localStorage.getItem("userEmail");

hamburgerMenu.onclick = () => {
    if (hamburger.classList.contains("d-none")) {
        hamburger.classList.remove("d-none");
        hamburger.classList.add("d-flex");
    }else{
        hamburger.classList.add("d-none");
        hamburger.classList.remove("d-flex");

    }
}

// update HTML
navEmail.innerText = userEmail;
userProfileEmail.innerText = `EMAIL: ${userEmail}`;

users.forEach((user) => {
    if (user.email === userEmail) {
        userImg.src = user.img;
    }
})

userProfileBtn[0].onclick = () => {
    if (changeImg.classList.contains("d-none")) {
        changeImg.classList.remove("d-none")
    }else {
        if (changeImgInput.value.length > 0){
            users.forEach((user) => {
                if (user.email === userEmail) {
                    user.img = changeImgInput.value;
                    localStorage.setItem('users', JSON.stringify(users));
                    setTimeout(time, 1000)
                }
            })
        }else {
            changeImg.classList.add("d-none")
        }

    }
}

userProfileBtn[1].onclick = () => {
    if (updatePassword.classList.contains("d-none")) {
        updatePassword.classList.remove("d-none")
    }else {
        if (updatePasswordInput[0].value.length <= 4){
            errorRegister.innerText = 'Password to short, password length must be between 4 and 20 characters';
        }else if (updatePasswordInput[0].value.length > 20){
            errorRegister.innerText = 'Password to long, password length must be between 4 and 20 characters';
        }else if (updatePasswordInput[0].value !== updatePasswordInput[1].value){
            errorRegister.innerText = 'Password 1 and password 2 do not match';
        }else {
            users.forEach((user) => {
                if (user.email === userEmail) {
                    user.password = updatePasswordInput[0].value;
                    localStorage.setItem('users', JSON.stringify(users));
                    errorRegister.style.color = 'green';
                    errorRegister.innerText = 'Password change successfully';
                    setTimeout(time, 3000)
                }
            })
        }
    }
}
function time(){
    window.location.reload();
}