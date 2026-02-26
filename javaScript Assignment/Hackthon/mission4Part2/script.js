//  let input = document.getElementById("input");
//  let btn=document.getElementById("btn");
//  let itemListUl = document.getElementById("itemList");

//  btn.addEventListener("click",()=>{
//      const text = input.value;
//      const li=document.createElement("li");
//      li.textContent=text;
//      itemListUl.appendChild(li);
//      input.value="";
//  })

 const items = document.querySelectorAll("li")

 for(let item of items)
 {
    item.addEventListener("click",()=>{
    item.remove();
 })
}

/*
querySelectorAll() returns a NodeList (a collection of elements),
not a single element.

So you must loop through it to access each <li>.

for...of works because it goes through each element one by one.


🧠 Simple Understanding 

querySelector() → gives one element 

querySelectorAll() → gives many elements 

Many elements → must use loop

*/

// //live Mirror
// let liveInput=document.getElementById("liveInput");
// let liveOutput = document.getElementById("liveOutput");

// liveInput.addEventListener("input",()=>{
//    liveOutput.textContent=liveInput.value;
// })
// //Character count
// let wordCount= document.getElementById("wordCount");
// liveInput.addEventListener("input",()=>{
//    wordCount.textContent=liveInput.value.length;
// })

let formData= document.getElementById("formData");
let formInput = document.getElementById("formInput");
let result=document.getElementById("result");

formData.addEventListener("click",(e)=>{
     e.preventDefault();
    result.textContent=formInput.value; 

    formInput.value="";
})
