//target 
let cName = document.querySelector(".text") 
let button = document.querySelector(".btn")

button.addEventListener("click",()=>{
    console.log(cName.value)
    if(cName.value==="")
    {
       // alert("Please Enter the value")
        document.querySelector(".error").textContent="Please Enter the value";
        return;
    }
    else
    {
        getWeatherReport()
    }
})
//view 
let city = document.querySelector(".cityName");
let tempature = document.querySelector(".tempature");
let weatherspeed = document.querySelector(".weather-speed");

//api key acf12f0df24e4044a0f68cd1647c59d0



async function getWeatherReport()
{
    let weathe_url =`https://api.weatherstack.com/current?access_key=acf12f0df24e4044a0f68cd1647c59d0&query=${cName.value}`;

    try
    {
    const takeData = await fetch(weathe_url);
    const showData = await takeData.json();
    console.log("Tempature: "+showData.current.temperature+" "+"Wind speed: "+showData.current.wind_speed+" "+" City Name: "+showData.location.name)

     city.textContent=showData.location.name
     tempature.textContent=showData.current.temperature+" °C"
     weatherspeed.textContent=showData.current.wind_speed+" km/h"

    }
    catch(e)    
    {
        console.log(e)
        alert(e)
    }
}
//  getWeatherReport()

// function getValue()
// {
//     if(cName.value==="")
//     {
//         console.log("Please Enter the value")
//         // document.querySelector(".error").textContent="Please Enter the value"
//         alert("Please Enter the value")
//     }
//     else
//     {    cName.value;
//        //  getWeatherReport()
//     }
// }
// button.addEventListener("click",getValue)