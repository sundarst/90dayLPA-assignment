//https://restcountries.com/v3.1/name/india

//header
let countryForm = document.getElementById("countryForm");
let countryInput = document.getElementById("countryInput");
let searchBtn = document.getElementById("searchBtn");
let errorCardStatus = document.getElementById("errorCard");
let sectionTag = document.getElementById("resultCard");
searchBtn.addEventListener("click",(e)=>
{
    e.preventDefault();
    getCountryDetails();
    countryInput.value="";
})


async function getCountryDetails()
{ 
   try
   {
    const country_url = `https://restcountries.com/v3.1/name/${countryInput.value}`;

        const takeData = await fetch(country_url);
        const showData = await takeData.json();

        if(takeData.ok)
        {
         sectionTag.classList.remove("hidden");  // i build core 80% logic 20% i asked help to ai comple this task
        }
        const flag =flagImgDhow.src=showData[0].flags.png; 
        const name= nameCommonShow.textContent=showData[0].name.common;
        const offical= nameOfficialShow.textContent=showData[0].name.official;
        console.log(flag);      console.log(name);    console.log(offical) ;  
      
        let cca2s = cca2.textContent=showData[0].cca2;
        let cca3s = cca3.textContent=showData[0].cca3;
        let regionChips =regionChip.textContent=showData[0].region;
        let subregionChips=subregionChip.textContent=showData[0].subregion;
        console.log(cca2s);  console.log(cca3s);  console.log(regionChips);  console.log(subregionChips); 

        let capitalValue=capital.textContent=showData[0].capital;
        let populationValue=population.textContent=showData[0].population;
        let areaValue = area.textContent=showData[0].area

       console.log("captial: "+capitalValue); console.log("poppulation: "+populationValue); console.log("Area: "+areaValue);

        let timezonesVlaue =timezones.textContent=showData[0].timezones;
        let languagesValues = languages.textContent=showData[0].languages;
        let currenciesValue = currencies.textContent=showData[0].currencies;

        console.log("timezones: "+timezonesVlaue); console.log("languages: "+languagesValues); console.log("currencies: "+currenciesValue);

       // let callingCodeValue = callingCode.textContent=showData[0].idd;
        let tldValue  = tld.textContent=showData[0].tld;
        let bordersValue = borders.textContent=showData[0].borders

        //console.log(callingCodeValue);
         console.log(tldValue); console.log(bordersValue);

      
        let coatImgValue = coatImg.src=showData[0].coatOfArms.png;
        let gmapsValue = gmaps.src=showData[0].maps.googleMaps;
        let osmapsValue =osmaps.src=showData[0].maps.openStreetMaps;

        console.log(coatImgValue); console.log(gmapsValue); console.log(osmapsValue);

        let fifaValue = fifa.textContent=showData[0].fifa;
        let carSideValue = carSide.textContent=showData[0].car.side;
        let startOfWeekValue = startOfWeek.textContent=showData[0].startOfWeek

        console.log("fifa: "+fifaValue);  console.log("car side: "+carSideValue);  console.log(" startOfWeek: "+startOfWeekValue); 
   
      
    }
   catch(e)
   {

    errorCardStatus.classList.remove("hidden")
    let er= errorCardStatus.textContent=pError.textContent;
     console.log("error"+er)
   }  
}

// let hidden = document.querySelector(".hidden");
// let sectionTag = document.querySelector("section");


let flagImgDhow =document.getElementById("flagImg");
let nameCommonShow = document.getElementById("nameCommon");
let nameOfficialShow = document.getElementById("nameOfficial")

let cca2 = document.getElementById("cca2");
let cca3 = document.getElementById("cca3");
let regionChip = document.getElementById("regionChip");
let subregionChip = document.getElementById("subregionChip")

let capital =document.getElementById("capital");
let population = document.getElementById("population");
let area =document.getElementById("area");

let timezones = document.getElementById("timezones");
let languages = document.getElementById("languages");
let currencies = document.getElementById("currencies")

let callingCode = document.getElementById("callingCode")
let tld = document.getElementById("tld")
let borders = document.getElementById("borders")

let coatImg = document.getElementById("coatImg")
let gmaps = document.getElementById("gmaps");
let osmaps = document.getElementById("osmaps")


let fifa  = document.getElementById("fifa");
let carSide = document.getElementById("carSide");
let startOfWeek = document.getElementById("startOfWeek")
let pError = document.querySelector("#pError");





























//Console Application for js next--> go do ui

// async function getCountryDetails()
// { 
//     const country_url = `https://restcountries.com/v3.1/name/${countryInput.value}`;

//     let takeData = await fetch(country_url);
//     let showData = await takeData.json();
//     console.log(showData)


        // for(let fl=0;fl<showData.length;fl++)
        // {
        // const flag =flagImgDhow.src=showData[fl].flags.png; 
        // const name= nameCommonShow.textContent=showData[fl].name.common;
        // const offical= nameOfficialShow.textContent=showData[fl].name.official;
        // console.log(flag);      console.log(name);    console.log(offical) ; 
        // }

//      let flag =flagImg.textContent=showData[0].flags.png; 
//      let name= nameCommon.textContent=showData[0].name.common;
//      let offical= nameOfficial.textContent=showData[0].name.official;
//      console.log(flag+"- "+name+" -  "+offical)
     
        // for(let cc=0;cc<showData.length;cc++)
        // {
        //     let cca2s = cca2.textContent=showData[cc].cca2;
        //     let cca3s = cca3.textContent=showData[cc].cca3;
        //     let regionChips =regionChip.textContent=showData[cc].region;
        //     let subregionChips=subregionChip.textContent=showData[cc].subregion;
        //     console.log(cca2s);  console.log(cca3s);  console.log(regionChips);  console.log(subregionChips); 
        // }
        
//       let cca2s = cca2.textContent=showData[0].cca2;
//       let cca3s = cca3.textContent=showData[0].cca3;
//       let regionChips =regionChip.textContent=showData[0].region;
//       let subregionChips=subregionChip.textContent=showData[0].subregion;

//       console.log(cca2s+"- "+cca3s+" -"+regionChips+"-"+subregionChips)


        // for(let cap=0;cap<showData.length;cap++)
        // {
        //     let capitalValue=capital.textContent=showData[cap].capital;
        //     let populationValue=population.textContent=showData[cap].population;
        //     let areaValue = area.textContent=showData[cap].area

        // console.log("captial: "+capitalValue); console.log("poppulation: "+populationValue); console.log("Area: "+areaValue);
        // }

//       let capitalValue=capital.textContent=showData[0].capital;
//       let populationValue=population.textContent=showData[0].population;
//       let areaValue = area.textContent=showData[0].area

//       console.log("captial: "+capitalValue); console.log("poppulation: "+populationValue); console.log("Area: "+areaValue)

//     let timezonesVlaue =timezones.textContent=showData[0].timezones;
//     let languagesValues = languages.textContent=showData[0].languages.eng;
//     let currenciesValue = currencies.textContent=showData[0].currencies.INR.name;

//      console.log("timezones: "+timezonesVlaue); console.log("languages: "+languagesValues); console.log("currencies: "+currenciesValue)

//     let callingCodeValue = callingCode.textContent=showData[0];
//     let tldValue  = tld.textContent=showData[0].tld;
//     let bordersValue = borders.textContent=showData[0].borders


//     let coatImgValue = coatImg.textContent=showData[0].coatOfArms.png;
//     let gmapsValue = gmaps.textContent=showData[0].maps.googleMaps;
//     let osmapsValue =osmaps.textContent=showData[0].maps.openStreetMaps;

//     console.log(coatImgValue); console.log(gmapsValue); console.log(osmapsValue);

//     let fifaValue = fifa.textContent=showData[0].fifa;
//     let carSideValue = carSide.textContent=showData[0].car.side;
//     let startOfWeekValue = startOfWeek.textContent=showData[0].startOfWeek

//     console.log("fifa: "+fifaValue);  console.log("car side: "+carSideValue);  console.log(" startOfWeek: "+startOfWeekValue); 

// }

// getCountryDetails();


/* My learning in this project

1.Simple rule

✔ Use [0] → when you want first result only
✔ Use loop → when you want all results

So your code working without loop is completely normal. 👍


2.How the API knows which country you need

When you send request like:

/name/india

The server searches its database for countries matching "india".

Then it sends matching results as an array.

Example response:

[
 {India data}
]

So India becomes index 0 because it is the first match.

 ------- 3.Simple idea-------------

        API always sends array of results
        You usually take first result [0] because it is the best match.

---------------------------------------------------

4.ok this search procees from api was handel by backend it show only result iam correct explain me shortly

Yes 👍 you are correct.

Short explanation

✔ Your frontend (JavaScript) only sends the request to the API.
✔ The API backend server searches its database for the country name.
✔ The backend filters the matching result.
✔ Then it returns the result to your frontend as JSON.

So the flow is:

1️⃣ Your JS sends request → /name/india
2️⃣ Backend API searches data
3️⃣ Backend sends matching result
4️⃣ Your JS displays the result in UI

Simple rule

Frontend → Request
Backend → Search + Filter + Send result

So yes, the search process is handled by the backend API, and your JS only shows the result. 👍






*/