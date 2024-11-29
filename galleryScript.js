

const navEmail = document.querySelector(".navEmail span");
const section = document.querySelector("section");
const btnNav = document.querySelectorAll(".navIndex");

const hamburgerMenu = document.querySelector("nav svg");
const hamburger = document.querySelector(".hamburger");

btnNav[0].onclick = () => {
    window.location.href = "index.html";
}
btnNav[1].onclick = () => {
    window.location.href = "chat.html";
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
    }else{
        hamburger.classList.add("d-none");
        hamburger.classList.remove("d-flex");

    }
}

fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => {

        console.log(data);

        for (let i = 1; i < 30; i++) {
            section.innerHTML += `
                 <div class="p-1 box">
                    <div>
                        <img src="${data[i].images[0]}" alt="">
                    </div>
                </div>
            `
        }

    })


// for (let i = 0; i < 30; i++) {
//     section.innerHTML += `
//         <div class="p-1">
//           <div class="box">
//
//           </div>
//         </div>
//     `
// }