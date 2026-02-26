let weight=95;
let height=175/100;

let bmi= weight/(height*height);

if(bmi<=18.5)
{
    console.log("under weight")
}
else if(bmi>18.5 &&bmi<=24.9)
{
    console.log("Normal weight")
}
else if(bmi>25 && bmi<=29.9)
{
    console.log("Over weight")
}
else if (bmi>30)
{
    console.log("Obese")
}
