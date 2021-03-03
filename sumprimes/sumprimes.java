public class SumPrimes{

   /* calculating the sum of primes
    */

   public static void main(String []args) {
     sumPrimeValues(12);
      System.out.println("Hello World"); // prints Hello World
   }
   private static int checkPrimeValue(int value){
    int[] myList = {2, 3, 5, 7};

      for (int i = 0; i < myList.length; i++) {
         if(myList[i] ==value){
          return value;
         }
         
         if( (value % myList[i])==0){
           return value;
         } 
      }
    return 0;
   }
   private static void sumPrimeValues(int value){
   
     int total=0;
   
     while(value>0) {
      
       total =total+checkPrimeValue(value);
       
       value--;
     }
     System.out.println("The total is "+total);
    }  
}
