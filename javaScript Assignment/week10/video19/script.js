localStorage.setItem("user","sundar")
let users=localStorage.getItem("user")
localStorage.removeItem("user")
localStorage.clear()
//console.log(user)

let myform= document.querySelector("form")
let input = document.querySelector("input")
let button = document.querySelector("button")
let span = document.querySelector("span")

myform.addEventListener("click",(e)=>{
    e.preventDefault();
  localStorage.setItem("name",input.value)
   console.log("event:"+input.value)
   let getName = localStorage.getItem("name");
   console.log("getLocalstoarge: "+getName)
   span.textContent=getName;
   input.value="";
})



