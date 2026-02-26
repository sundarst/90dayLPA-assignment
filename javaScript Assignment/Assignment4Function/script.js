//challenge 1
let a;
let b;
function sumFunction(a,b)
{
    return a+b;
}

let printSum=sumFunction(10,36);
//console.log("sum value: "+printSum);

//challenge 2 Greeting Machine
let name;
function greet(name="Gust")
{
    console.log("Hello, "+name+"!")
}
//greet("sundar")

//challenge 3 check prime number
let num;
function  isPrime(num)
{
    for(let i=2;i<num;i++)
    {
     
        if(num==1) return false;
      
        if(num%i==0)
        {
           // console.log("Not Prime Number")
           return false;
        }
    }
      return true;
}
    if(isPrime(1))
    {
      //  console.log("is prime")
    }
    else
    {
       // console.log("is not  prime")
    }
// challenge 4 Random Number Generator
let max;
let min;
function randomNumberGenerator(min,max)
{
    // console.log(Math.random()*(max-min)+min);//min include max  not include
    // console.log(Math.random()*(max-min+1)+min);//min include max include
}

 randomNumberGenerator(1,5);

 //challenge 5 find Maximun in Array

 let nums5 =[10,95,2,9,23];
 
 function functionMaxAarray(nums5)
 {
     let maxnums5=nums5[0]
    for(let i=0;i<nums5.length;i++)
    {
        if(maxnums5<nums5[i])
        {
            maxnums5=nums5[i];
        }
    }
    console.log("Maximun value: "+maxnums5);
 }

 functionMaxAarray(nums5);

//  let weight = 75;
//  let height =175/100;
 

 function calculateBMI(weight,height)
 {
    let heightValue=height/100;
   // let bmi = weight/(height*height);
    let bmi = weight/(heightValue*heightValue);
    if(bmi<=18.5)
    {
        console.log("under weight: "+bmi)
    }
    else if(bmi>18.5 &&bmi<=24.9)
    {
        console.log("Normal weight: "+bmi)
    }
    else if(bmi>25 && bmi<=29.9)
    {
        console.log("Over weight: "+bmi)
    }
    else if (bmi>30)
    {
        console.log("Obese: "+bmi)
    }
 }
 calculateBMI(75,175);