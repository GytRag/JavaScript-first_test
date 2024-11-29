

const navEmail = document.querySelector(".navEmail span");
const section = document.querySelector("section");
const btnNav = document.querySelectorAll(".navIndex");
const hamburgerMenu = document.querySelector("nav svg");
const hamburger = document.querySelector(".hamburger");



const users = JSON.parse(localStorage.getItem('users'));
const userEmail = localStorage.getItem("userEmail");

if (users === null) {
    window.location.href = "register.html";
} else if(userEmail === null) {
    window.location.href = "register.html";
}else {
    users.forEach((user) => {
        if (user.email === userEmail) {
            btnNav[0].onclick = () => {
                window.location.href = "gallery.html";
            }
            btnNav[1].onclick = () => {
                window.location.href = "chat.html";
            }
            btnNav[2].onclick = () => {
                window.location.href = "userProfile.html";
            }
            btnNav[3].onclick = () => {
                localStorage.removeItem("userEmail");
                window.location.href = "login.html";
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
                navEmail.innerText = localStorage.getItem("userEmail");

                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(data => {

                        for (let i = 0; i < 10; i++) {
                            section.innerHTML += `
                <div id="${data[i].id}" class="postCard bg-light p-2 rounded-2">
                    <p class="m-0 pb-1 fw-bolder">${data[i].title}</p>
                    <p class="m-0">${data[i].body}</p>
                </div>
            `
                        }

                        const postCard = document.querySelectorAll('.postCard');

                        postCard.forEach((post) => {
                            post.onclick = (event) => {
                                localStorage.setItem('post_id', event.target.id)
                                window.location.href = "singlePost.html";
                            }
                        })

                    })
            })()

        }
    })
}






