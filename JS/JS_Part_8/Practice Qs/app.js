// Qs. Check if all numbers in our array are multiple of 10 or not.

let arr = [10,20,25,30,40,50,55];

let mult = arr.every((el)=> (el%10==0));

console.log(mult);

// Qs. Create a function to find the min number in an array

let num = [4,5,2,7,1,8,9,4,6,5];

let result = num.reduce((min,el)=> {
    if (el<min){
        return el;
    }else{
        return min;
    }
});
console.log(result);


// Or we can make function also

function getMin(nums){
let result = nums.reduce((min, el) => {
  if (el < min) {
    return el;
  } else {
    return min;
  }
});
return  result;
}