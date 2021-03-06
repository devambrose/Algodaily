/*
this is a classic and very common interview problem. Given an array of integers, return the indices of the two numbers in it that add up to a specific goal number.

So let's say our 'goal' number was 10. Our numbers to sum to it would be 3 and 7, and we would return an array of indices 1 and 3 respectively.

let arr = [1, 3, 6, 7, 9];
let goal = 10;
twoSum(arr, goal);
// [1, 3]

**/

function twoSum(arr,goal)
{
  let vector=[];
  
  for(let i=0;i<arr.length;i++){
    let temp_val=goal-arr[i];
    
    if(arr.includes(temp_val)){
    
       vector=[i,arr.indexOf(temp_val)];
       break;
    }
  
  }
  
  return vector;

}



console.log("Indices",twoSum([1,2,3,7],10));


console.log("Indices",twoSum([1, 3, 6, 7, 9],10));

/*
Length of the array <= 100000
The values of the array will be between -1000000000 and 1000000000
The array can be empty
The target sum will be between -1000000000 and 1000000000
Expected time complexity : O(n)
Expected space complexity : O(n)
*/
