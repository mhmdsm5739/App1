let userInfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links =document.querySelector("#link")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="block"
    userData.innerHTML = localStorage.getItem("username")
}