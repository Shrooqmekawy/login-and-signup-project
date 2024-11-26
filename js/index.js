// signup page
var form=document.querySelector("#sign");
var signName=document.querySelector("#signName");
var userEmail=document.querySelector("#userEmail");
var userPass=document.querySelector("#userPass");
var signButton=document.querySelector("#signBtn");
var loginLink=document.querySelector("#loginLink");
// signup page


// pages
var loginPg=document.querySelector("#loginPg");
var signPg=document.querySelector("#signPg");
// pages


// login page
var formLogin=document.querySelector("#login");
var loginEmail=document.querySelector("#loginEmail");
var loginPass=document.querySelector("#loginPass");
var loginButton=document.querySelector("#loginButton");
var signLink=document.querySelector("#signLink");
// login page


// valid
var notification=document.querySelector("#invalid");
var done=document.querySelector("#valid");
var loginDone=document.querySelector("#invalidLogin");
// valid

// storage
loginInfo=[];
signUpInfo=[];
var storedName="";
// storage

if(localStorage.getItem("loginUsers")==null){
    loginInfo=[];
}
else{
    loginInfo=JSON.parse(localStorage.getItem("loginUsers"));
    loginInfo.push("loginUsers")
}
if(localStorage.getItem("signUsers")==null){
    signUpInfo=[];
}
else{
    signUpInfo=JSON.parse(localStorage.getItem("signUsers"));
    signUpInfo.push("signUsers")
}



// login section
loginButton.addEventListener("click",function (){
    var loginUsers={
       email: loginEmail.value.trim(),
       pass: loginPass.value.trim(),
    }
   if(loginEmail.classList.contains("valid")&&loginPass.classList.contains("valid")){
      loginInfo.push(loginUsers);
    
      clear()
      loginDone.classList.add("d-none")
      location.href=`index1.html?signName=${storedName}`
     }
            else{
                loginDone.classList.remove("d-none")
            }
   })

// login section

// signup section
signButton.addEventListener("click",function (){
    var signUsers={
   
       name: signName.value.trim(),
       email: userEmail.value.trim(),
       pass: userPass.value.trim(),
   
    }

    if(signName.classList.contains("valid")&&userEmail.classList.contains("valid")&&userPass.classList.contains("valid")){
        notification.classList.add("d-none") 
         done.classList.remove("d-none")
      signUpInfo.push(signUsers);
      loginInfo.push(signUsers);

    localStorage.setItem("signUsers",JSON.stringify(signUpInfo))
    storedName=signName.value.trim()
    loginPg.classList.remove("d-none")
    signPg.classList.add("d-none")
    clear()
}
else{
    notification.classList.remove("d-none")
    done.classList.add("d-none")
}

   })

//    sign up link
    signLink.addEventListener("click",function (){
        signPg.classList.remove("d-none")                    
        loginPg.classList.add("d-none")
    
   })
//    sign up link

//    login link
   loginLink.addEventListener("click",function (){
    loginPg.classList.remove("d-none")
    signPg.classList.add("d-none")
   })
// login link




// sHARE function



form.addEventListener("input" , function(e){
    var inputs= e.target
    var regexSign={
        signName: /[a-z]{3,}/,
        userEmail:/^[a-z0-9]+@[a-z]+\.(com|net|org)$/i,
        userPass: /^[a-z0-9]{4,12}/,
    }
  var usedEmail=userEmail.value.trim()
    var userEmailValid=signUpInfo.find(function (item) {
     return item.email === usedEmail;
 });

if(regexSign[inputs.id].test(inputs.value)==true&& !userEmailValid){
        notification.classList.add("d-none") 
         done.classList.remove("d-none")
         inputs.classList.add("valid")

        
}
else{
    notification.classList.remove("d-none")
    done.classList.add("d-none")
    inputs.classList.remove("valid")
}
})


formLogin.addEventListener("input",function(){
   

    var email=loginEmail.value.trim();
    var emailLoginValid=signUpInfo.find(function(item){
        return  item.email===email});
        
        var usedLoginpass=loginPass.value.trim();
        var passLoginValid=signUpInfo.some(function(item){
            return  item.pass===usedLoginpass});

            if(emailLoginValid){
                loginEmail.classList.add("valid");
                loginDone.classList.add("d-none");
            }
            else{
                
                loginDone.classList.remove("d-none")
                loginEmail.classList.remove("valid");
            }
            if(passLoginValid){
                loginPass.classList.add("valid")
                loginDone.classList.add("d-none");
            }
            else{
                loginPass.classList.remove("valid")
                loginDone.classList.remove("d-none")
            }
})

function clear(){
    signName.value=null
    userEmail.value=null
    userPass.value=null
    loginEmail.value=null
    loginPass.value=null
}