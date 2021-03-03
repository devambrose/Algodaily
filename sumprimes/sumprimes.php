<?php

  
  
  function processCheckPrimes($value){
  $arr=[2,3,4,5,7];
  if(in_array($value,$arr)){
    return $value;
  }
  $status=1;

  foreach($arr as $prime){
    if($value % $prime){
      $status=0;
    }
  }
  if($status)
    return $value;
  }
  function processSumPrimes($value){
   $total=0;
   
    for ($i=$value;$i>0;$i--){
       
        $total=$total+(processCheckPrimes($i)==null ? 0 : processCheckPrimes($i));
        
    }
   echo("Total Prime Value : ".$total."\n");
  
  }
  
  processSumPrimes(17);
  
?>
