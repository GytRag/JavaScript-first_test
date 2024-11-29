
const navEmail = document.querySelector(".navEmail span");
const section = document.querySelector("section");
const btnNav = document.querySelectorAll(".navIndex");

const hamburgerMenu = document.querySelector("nav svg");
const hamburger = document.querySelector(".hamburger");

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
    window.location.href = "userProfile.html";
}
btnNav[4].onclick = () => {
    window.location.href = "login.html";
    localStorage.removeItem("userEmail");
}


hamburgerMenu.onclick = () => {
    if (hamburger.classList.contains("d-none")) {
        hamburger.classList.remove("d-none");
        hamburger.classList.add("d-flex");
    }else{
        hamburger.classList.add("d-none");
        hamburger.classList.remove("d-flex");

    }
}

(() => {
    const postID = localStorage.getItem("post_id");
    navEmail.innerText = localStorage.getItem("userEmail");

    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(res => res.json())
        .then(data => {

                section.innerHTML = `
                    <div id="${data.id}" class="singlePostCard bg-light p-2 rounded-2">
                        <p class="m-0 pb-1 fw-bolder">${data.title}</p>
                        <p class="m-0">${data.body}</p>
                    </div>
                `
        })
})()