const btn_log = document.getElementById("log-in");
const btn_signup = document.getElementById("sign-up");
const fm_up = document.getElementById("signupform");
const fm_in = document.getElementById("loginform");


btn_signup.addEventListener("click", ()=> {   
fm_in.classList.add("hide");
fm_up.classList.remove("hide");
});

btn_log.addEventListener("click", ()=> {   
fm_up.classList.add("hide");
fm_in.classList.remove("hide");
});

function ps(){
  var hs=document.getElementById("pass-in");
  if(hs.type ==="password"){
    hs.type="text";
    }
  else
  hs.type = "password";
};

fm_up.addEventListener("submit",function(e){
    e.preventDefault();
    const user = document.getElementById("name").value.trim();
    const mail = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value;
    const cpas = document.getElementById("confirm-password").value;
    const message= document.getElementById("up_msg");

    if(pass !==cpas){
        message.style.color="#f01a05";
        message.textContent="password doesn't match!   Check again!!";
        return;
    };    
    const data= {user, mail, pass};
    localStorage.setItem("data",JSON.stringify(data));
    message.style.color = "#008000";
    message.textContent = "sucessfully Signup !  Plz Login";
    document.getElementById("fm_up").reset();
});

fm_in.addEventListener("submit",function(e){
    e.preventDefault();
    const user = document.getElementById("name").value.trim();
    const pass = document.getElementById("password").value;
    const message= document.getElementById("in_msg");
    const fetch = JSON.parse(localStorage.getItem("data"));
    

    if(!fetch || fetch.user !==user || fetch.pass !==pass){
    message.style.color="#f01a05";
    message.textContent = "Invalid Credentials ! Check your username or password.";
    return;
    }

    message.style.color = "#008000";
    message.textContent =`welcome, ${fetch.user}`;
    document.getElementById("login-form").reset(); 
});