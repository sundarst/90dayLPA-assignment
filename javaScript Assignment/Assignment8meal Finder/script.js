let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let message = document.getElementById("message");
let results = document.getElementById("results");


searchBtn.addEventListener("click", getMealApi);
    async function getMealApi()
    {
        //1.Get search Team form input
        let searchValue =searchInput.value;
        //2.check if search box is empty
        if( searchValue==="")
         {
            message.textContent="Enter value in input ! Input is empty."
         }
        //3.clear Previous result
        searchInput.value="";

        //7. clear search message 
         results.innerHTML="";

       //4.Build API URL
       const meal_url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
       //5.Make API call using await
        const respone = await fetch(meal_url);
        const data = await respone.json();
        //show in console
       // console.log(data);
 
         //6.check if meals were found
         if(data.meals===null)
            {
                   console.log("Data not found data null!")
                   message.textContent="Meal not found"
                   return;
            }
            else 
            {
                //  console.log(data.meals[0].strMeal);
                //  console.log(data.meals[0].strArea);
                //  console.log(data.meals[0].strMealThumb)
               
                //8.loop through all result
                for(let i=0;i<data.meals.length;i++)
                {

                let meal = data.meals[i];

                    
                 let mealsCard  = document.createElement("div");
                  mealsCard.className="meal-card";
                  mealsCard.id = meal.idMeal;   // ⭐ VERY IMPORTANT  //meal it come api.object
                  mealsCard.innerHTML=
                 '<img src=" '+ meal.strMealThumb +' " alt=" '+ meal.strMeal +' " >'+
                 '<div class="meal-info">'+
                 '<h3>'+ meal.strMeal+ '</h3>'+
                 '<p>'+meal.strCategory+' - '+meal.strArea+ '</p>'+
                 '</div>'

                  results.appendChild(mealsCard);
                }
               }
    }


    //part 2 show data

     results.addEventListener("click",(e)=>{
        let card =e.target.closest(".meal-card");
        if(card)
        {
            idMeal=card.id;
            showData(idMeal);
        }    
        modal.style.display="inline-block";
     });

     let modalBody = document.getElementById("modalBody");
     let modalcontent = document.querySelector(".modal-content")
     let modal= document.querySelector("#modal");
    async function showData(idMeal)
    {
         
        try{
        const meals_id_Url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        const takeData = await fetch(meals_id_Url);
        const showData = await takeData.json();
        console.log(showData);
        

         modalBody.innerHTML="";
        let modalHeader = document.createElement("div");
        modalHeader.className="modal-header";
        modalHeader.innerHTML=
        '<img src=" '+ showData.meals[0].strMealThumb+' " alt=" '+ showData.meals[0].strCategory+' ">'+
        '<h2>'+ showData.meals[0].strCategory+'</h2>'+
        '<p>' +  showData.meals[0].strCategory+' - '+ showData.meals[0].strArea + '</p>'+


        '<div class="modal-body">'+
        "<ul id='ingredientList'></ul>"+
        '<h3>' +" Instruction"+ '</h3>'+
        '<p>' + showData.meals[0].strInstructions+'</p>'+
        '</div>'

        modalBody.appendChild(modalHeader);
        let ingredientList = document.getElementById("ingredientList");
         for(let i=1;i<=20;i++)
          {
            let ingredient = showData.meals[0]["strIngredient"+i];
            let measure = showData.meals[0]["strMeasure"+i];

             let li = document.createElement("li");
            if(ingredient && ingredient.trim()!=="")
            {
              
                li.textContent= measure +" "+ ingredient;
                 ingredientList.appendChild(li);
            }
           
        }
       
        }
        catch(e)
        {
            console.log("error"+e)
            message.textContent="Fail to fetch data"
        }
    }
   
    let closeBtn =document.getElementById("closeBtn");
    closeBtn.addEventListener("click",()=>{
        modal.style.display="none";
    })

    




//closest() finds the nearest parent element that matches the selector.
/*
Method	Example
dataset	card.dataset.id

Use dataset because it is designed for custom data storage in HTML.

In the TheMealDB API:

search.php?s= → search by meal name

lookup.php?i= → search by meal ID





for i = 1 to 20
   get ingredient
   get measure

   if ingredient not empty
        create li
        append to ul
*/



 
//Thai Green Curry

   
//  mealsCard.innerHTML=
//                  '<img src=" '+ data.meals[0].strMealThumb +' " alt=" '+ data.meals[0].strMeal +' " >'+
//                  '<div class="meal-info">'+
//                  '<h3>'+ data.meals[0].strMeal+ '</h3>'+
//                  '<p>'+data.meals[0].strCategory+' - '+data.meals[0].strArea+ '</p>'+
//                  '</div>'

//                  results.appendChild(mealsCard);

  