/**
 * this script is for calculating all the sum of the primes in a value
 * @param {check_prine} value 
 */
function check_prime(value){

    /***
     * check_prime(value)
     * this function receives a value either in string or int format which we convert using parse int
     * and then uses the primes array to check if the value belongs in any of the main prime numbers
     */
    let primes=[2,3,4,5,7]

    if (primes.includes(value) ){
        return value;
    }else{

        let status=1;

        primes.forEach(prime=>{
            
            if(value % prime ==0){
                status =0;
            
            } 
        });

        if(status)
          return value;

    }

}
function sum_of_primes(value){

    let total=0;
    for (let i=parseInt(value);i>0;i--){
       
        total=total+(check_prime(i)==undefined ? 0 : check_prime(i))
        //console.log(check_prime(i))
    }
    console.log("Total Prime Value : ",total);
}
sum_of_primes(17);