const joker_Url="https://official-joke-api.appspot.com/random_joke";

let p1= document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let button = document.querySelector(".btn-api")
let errorP = document.querySelector(".erro_p")
async function getJoke()
{
    try
    {
        const showData = await fetch(joker_Url);
        const takeData = await showData.json();
        p1.textContent= `${takeData.setup}`
        p2.textContent=`${takeData.punchline}`
         console.log(takeData.setup)
         console.log(takeData.punchline)
    }
    catch(e)
    {
        console.log("fetch error"+e);
        errorP.textContent="Fetch error from URL:"+e;
    }
}
 

 button.addEventListener("click",getJoke);

/*
function sayHello() {
    console.log("Hello");
}

sayHello();   // 🔴 Runs immediately
sayHello;     // 🟢 Just reference (does not run)


If you understand this, you understood function reference vs function call — very important concept in JavaScript
✅ Simple Rule
Code	Meaning
getJoke()	Run now
getJoke	Run later
*/
