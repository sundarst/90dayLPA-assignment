let input = document.querySelector("input");

input.addEventListener("keypress",(event)=>{
    if(event.key==="Enter")
    {
        console.log("Key enter")
        getImdbMovie();
    }
});

//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=7bf2083e
async function getImdbMovie()
{
  const imdb_url=`https://www.omdbapi.com/?apikey=7bf2083e&t=${input.value}`;
   try
   {
    const response = await fetch(imdb_url);
    const data = await response.json();
    console.log(data);
   }
   catch(e)
   {
        console.log("fetch error: "+e);
   }
}

