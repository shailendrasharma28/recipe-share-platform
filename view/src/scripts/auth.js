const baseUrl = 'http://localhost:3000'
const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');
const redirectToSignup = document.querySelector('#redirect-signup');
const redirectToLogin = document.querySelector('#redirect-login');

if(loginForm){
    loginForm.addEventListener("submit", async(e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        const loginCredentials = {email: email, password: password};
        
        try {
            const login = await axios.post(`${baseUrl}/api/user/login`, loginCredentials);
            const res = login.data;
            if(res.success === false) {
                showToast(res.message, "error")
            }
            showToast(res.message, "success");
            localStorage.setItem("user-details", JSON.stringify(res.user));
            localStorage.setItem("jwt", res.token);
            setTimeout(() => {
                window.location.href = "/index.html"
            },1000)  
        } catch (error) {
            showToast(error.response ? error.response.data : error.message, "error")
        }
    })
}

if(redirectToSignup){
    redirectToSignup.addEventListener("click", (e) => {
        e.preventDefault();
        const loginSection = document.querySelector('#login');
        const signupSection = document.querySelector('#signup');

        signupSection.classList.remove("hidden");
        loginSection.classList.add("hidden");
    })
}

if(signupForm){
    signupForm.addEventListener("submit", async(e) => {
        e.preventDefault();
        const name = document.querySelector('#userName').value;
        const mobile = document.querySelector('#mobile').value;
        const email = document.querySelector('#userEmail').value;
        const password = document.querySelector('#create-password').value;
        
        const userCredentials = {name, mobile, email, password};
        console.log(userCredentials);
        try {
            const login = await axios.post(`${baseUrl}/api/user/signup`, userCredentials);
            console.log(login);
            
            const res = login.data;
            console.log(res);
            
            if(res.success === false) {
                showToast(res.message, "error")
                console.log(res.message);
                
            }
            showToast(res.message, "success");
            setTimeout(() => {
                window.location.href = "/auth"
            })  
        } catch (error) {
            showToast(error.response ? error.response.data : error.message, "error")
        }
    })
}

if(redirectToLogin){
    redirectToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const loginSection = document.querySelector('#login');
        const signupSection = document.querySelector('#signup');

        loginSection.classList.remove("hidden");
        signupSection.classList.add("hidden");
    })
}