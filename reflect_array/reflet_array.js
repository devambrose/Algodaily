/***'
 * We're given an array of integers that looks like the following:

[0, 1, 2, 3, 4, 5, 6, 7, 8]
Let's imagine we're an assembly line and we decide to shift some workers around.

Say we take our array, and rotate it at a random pivot so that the section after the pivot comes before. Let's put our pivot between 5 and 6:

[6, 7, 8, 0, 1, 2, 3, 4, 5]
See how it shifts?
 */

 function reflect_array(arr,pos,status=1){

   let position= pos.toString().split(".");

   let smallest=[0],largest=[],small=arr[0];

   for(let i=1,j=position.length >1  ? parseInt(pos):pos ;i<arr.length;i++){
      if(i >j){
          largest.push(arr[i])
      }else{
          if(position.length >1){

            smallest.push(arr[i])
           
          }else{
            if(arr[i] !=parseInt(pos))
                 smallest.push(arr[i])
          }
          
      }

      small=small < arr[i] ? small :arr[i] 

   }

   console.log("Old array ",arr)

   console.log("reflected array",[...largest,...smallest]);

   console.log("Reflection Point ",pos)
   
   console.log("Smallest integer : ",small)
 }

 reflect_array([0, 1, 2, 3, 4, 5, 6, 7, 8],5.5,1);

 /****
  * Length of the array <= 100000
  * The values in the array will be between -1000000000 and 1000000000
  * Expected time complexity : O(log n)
  * Expected space complexity : O(1)
  */