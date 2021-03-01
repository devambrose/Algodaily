/***
 *  If the substring can be found in the string, return the index at which it starts. Otherwise, return -1.
 * 
 * function detectSubstring(str, subStr) {
 *   return -1;
 * }
 * Important-- do not use the native String class's built-in substring or substr method. 
 * This exercise is to understand the underlying implementation of that method.
*/
function detect_substring(str,subString){
   console.log("\nMain String :",str);

   console.log("\nSubstring :",str);
   
   str=str.toString().split(subString).length > 1 ? str : -1;

   if(str ==-1)
     return ;

     let count=subString.length;

     let temp='';

    for(let i=0;i<str.length-1;i++){
       // console.log(str.charAt(i)+""+str.charAt(i+1));
         if(str.charAt(i)+""+str.charAt(i+1)==subString){
             console.log("Start @ position",i)
           return;

         }
    }
}
/**
 * Length of both the given strings <=100000
 * The strings would never be null
 * The strings will only consist of lowercase letters
 * Expected time complexity : O(n)
 * Expected space complexity : O(1)
 */
detect_substring("I am javing maury","am")