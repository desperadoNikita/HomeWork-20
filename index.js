const form = document.querySelector("#form");

form.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(e.currentTarget.elements);

    const {
        elements: {login, password},
    } = e.currentTarget;
    if (login.value === "" || password.value === ""){
        console.log("Заповніть обов'язкові поля");
        return;
    }
    
    console.log(login.value);
    console.log(password.value);

    const user = document.querySelector("#login").value;
    const user1 = document.querySelector("#password").value;
    
    document.querySelector("#user").innerHTML = user;
    document.querySelector("#user1").innerHTML = user1;

    localStorage.setItem("login", user);
    localStorage.setItem("password", user1);
}

document.querySelector("#login").value = localStorage.getItem("login") || "";
document.querySelector("#password").value = localStorage.getItem("password") || "";
// 
console.log(dayjs('2023-04-22').format('D/M/YYYY'));
