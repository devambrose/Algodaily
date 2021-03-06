import java.util.Arrays; 
class TwoSum{

 public static void main(String []args) {
    
      System.out.println("Hello World"); // prints Hello World
 }
 public static int[] twoCalculate(int[] myList,int target){
 
   int[] tempList;
 
   for(int i=0;i<myList.length;i++){
     int temp=target-i;
     
     if(Arrays.asList(myList).contains(temp)){
       tempList[1]=i;
       tempList[1]=
       
       System.out.println({Arrays.asList(myList).indexOf(temp),i})
       break;
     }
   }
   return tempList;
 }

}
