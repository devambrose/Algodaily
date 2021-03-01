/***
 * Remove Duplicates From Array
 * Given an array, return another array with just the ordered 
 * unique elements from the given array. In other words, you're removing any duplicates.
 * Note: Order needs to be preserved, 
 * so no sorting should be done.
 *  And the order should be maintained with the first occurrence of the element in the given array.
 */

 const handle_duplicates=arr=>[...new Set(arr)]

 console.log(handle_duplicates([1,2,3,5,6,6,7,8,9,9,10,11,67]))


 /****
  * Length of the array <= 100000
  * The values in the array between -1000000000 and 1000000000
  * Expected time complexity: O(n)
  * Expected space complexity: O(n)
  */