const baseUrl = `http://localhost:3000`
const goToLogin = document.querySelector('#auth-btn');
const profile = document.querySelector('#profile');

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    if(!token){
        goToLogin.classList.remove("hidden");
        profile.classList.add("hidden")
    } else {
        goToLogin.classList.add("hidden");
        profile.classList.remove("hidden")
    }
})

if(goToLogin) {
    goToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = `${baseUrl}/auth`
    })
}