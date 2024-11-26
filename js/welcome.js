// // welcome
// var welcomeName =document.querySelector("#message")
// // welcome
var welcomeName =document.querySelector("#message")
var text=document.querySelector("#logout");
var textLog=document.querySelector("#log")
var btn= document.querySelector("#btn")

    window.addEventListener("resize", function(){
        if(window.innerWidth<=768){
            text.classList.add("d-none")
            
            btn.classList.remove("d-none")
        }
        else{
            text.classList.remove("d-none")
       
            btn.classList.add("d-none")
        }
    }) 
     window.addEventListener("load", function(){
        if(window.innerWidth<=768){
            text.classList.add("d-none")
            
            btn.classList.remove("d-none")
        }
        else{
            text.classList.remove("d-none")
       
            btn.classList.add("d-none")
        }
    })
    btn.addEventListener("click",function(){
        textLog.classList.toggle("d-none")
    })
    textLog.addEventListener("click",function(){
     window.location.href="index.html"
    })
    text.addEventListener("click",function(){
        window.location.href="index.html"
       })
 
var searchedName=new
URLSearchParams(window.location.search);

 var userName=searchedName.get("signName");

 if(userName){
    welcomeName.innerHTML= `welcome,  <span>   ${userName}</span> `
 }
 else{
    welcomeName.textContent= "welcome user"
 }



// console.log(
//     welcomeName.textContent= `welcome ,  ${userName}`  )

