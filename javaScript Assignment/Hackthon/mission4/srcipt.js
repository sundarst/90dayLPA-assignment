let h1 = document.getElementById("h1");
let btn = document.getElementById("btn");
let blueBtn = document.getElementById("blueBtn")
let redBtn = document.getElementById("redBtn");
// btn.addEventListener("click" ,()=>{   
//      text="Now you improving in Dom";
//      h1.textContent=text;
// }
// )
btn.addEventListener("mouseover",()=>{
    text="Now you improving in DOM in mouse Over"
    h1.textContent=text;
    
})

// {/* <h1 id="title">Hello <span style="display:none;">Hidden</span> World</h1>
// let h1 = document.getElementById("title");

// console.log(h1.textContent);
// console.log(h1.innerText); */}

// 🔹 textContent →

// Hello Hidden World

// innerText →

// Hello World

blueBtn.addEventListener("click",()=>{
    h1.style.color="blue"
})
redBtn.addEventListener("click",()=>{
     text="Now by click change text and chage color"
     h1.textContent=text;
     h1.style.color="red"
})
