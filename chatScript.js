const chat = document.querySelector(".chat");
const send = document.querySelector(".send");
const input = document.querySelector("input");

const hamburgerMenu = document.querySelector("nav svg");
const hamburger = document.querySelector(".hamburger");

const navEmail = document.querySelector(".navEmail span");
const btnNav = document.querySelectorAll(".navIndex");
btnNav[0].onclick = () => {
    window.location.href = "index.html";
}
btnNav[1].onclick = () => {
    window.location.href = "gallery.html";
}
btnNav[2].onclick = () => {
    window.location.href = "userProfile.html";
}
btnNav[3].onclick = () => {
    window.location.href = "login.html";
    localStorage.removeItem("userEmail");
}
navEmail.innerText = localStorage.getItem("userEmail");

hamburgerMenu.onclick = () => {
    if (hamburger.classList.contains("d-none")) {
        hamburger.classList.remove("d-none");
        hamburger.classList.add("d-flex");
    } else {
        hamburger.classList.add("d-none");
        hamburger.classList.remove("d-flex");

    }
}

send.onclick = () => {
    const date = new Date();
    const formattedDate = date.toLocaleString('lt-LT', {timeZone: 'Europe/Vilnius'});

    if (input.value.length > 0) {
        chat.innerHTML += `
           <div class="message m-2">
                <p class="p-2 mb-1">${input.value}</p>
                <div class="text-end"><small>${formattedDate}</small></div>
            </div>
        `
        input.value = '';
    }
}

