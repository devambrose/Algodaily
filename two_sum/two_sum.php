<?php

/**this is a classic and very common interview problem. Given an array of integers, return the indices of the two numbers in it that add up to a specific goal number.

So let's say our 'goal' number was 10. Our numbers to sum to it would be 3 and 7, and we would return an array of indices 1 and 3 respectively.

let arr = [1, 3, 6, 7, 9];
let goal = 10;
twoSum(arr, goal);
// [1, 3]

**/
function twoSum($arr,$target){
  $obj=array();
  
  for($i=0;$i<count($arr);$i++){
     $temp=$target-$arr[$i];
     
     if(in_array($temp,$arr)){
       
       $obj=array($i,array_search($temp,$arr));
       break;
     }
  }
  
  return $obj;
}


print_r(twoSum([1, 3, 6, 7, 9],10));

/*
Length of the array <= 100000
The values of the array will be between -1000000000 and 1000000000
The array can be empty
The target sum will be between -1000000000 and 1000000000
Expected time complexity : O(n)
Expected space complexity : O(n)
*/
?>
