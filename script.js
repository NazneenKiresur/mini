function checkUserName(){
    const userNamePattern = /[a-zA-z]{8,15}/;
    const userName = document.querySelector("#Uname");
    if(userNamePattern.test(userName.value)){
        alert("Username valid")
    }
    else{
        alert("Enter valid username")
    }
    return userNamePattern.test(userName.value)

}

function checkPassword(){
    const passwordpattern= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    const userpass= document.querySelector('#Pass')
    if(passwordpattern.test(userpass.value)){
        alert('Password valid')
    }
    else{
        alert('Enter valid password')
    }
    return passwordpattern.test(userpass.value)
}

function handle(event){
    event.preventDefault();
    console.log("Username: ",checkUserName());
    console.log("Password: ",checkPassword());
}

document.getElementById("log").addEventListener("click",handle);