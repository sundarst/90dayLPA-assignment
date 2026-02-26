
//Challange 1:Print Number 1-50
//use a for loop

for(let i=1;i<=50;i++)
{
  //  console.log(i);
}

//challange 2:Favorite Movies
//create an array of 5 favorite movies
//print each one using loop

let movie=["LKG","Kgf","kgf2","Goat","LEO"];
for(let favMovie of movie)
{
   // console.log(favMovie);
}

// challange 3:Sum of Array
// let number =[10,20,30,40,50]

let number=[10,20,30,40,50]
let sum=0;
for(let i=0;i<number.length;i++)
{
    sum+=number[i];
}
//console.log("Total Value: "+sum);

// challange 4:Find Larget Number
// let number =[15,12,8,30,2]

let nums =[15,12,8,30,2];
let max=nums[0];
for(let i=0;i<nums.length;i++)
{
    if(max<nums[i])
    {
        max=nums[i];
    }
}
//console.log(max);

// challange 5: Reverse an Array 
let fruits=["Apple","Banna","Cherry"];
for(let i=fruits.length;i>=0;i--)
{
    console.log(fruits[i]);
}