let api_Url="https://jsonplaceholder.typicode.com/todos/1"
async function getJoke()
{
    let takeData = await fetch(api_Url);
    let showData = await takeData.json();
   
    console.log("Id: "+showData.id+" "+" Title: " +showData.title)
}
getJoke();