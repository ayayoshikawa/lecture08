function isPrimeNumber(number){
　　　var divisor_count=0;

　　　if(!isNaN(number) && number > 1){
　　　　　　for(var j=2; j<number; j++){
　　　　　　　　　if(number % j === 0){
　　　　　　　　　　　　divisor_count++;
　　　　　　　　　}
　　　　　　}

　　　　　　if(divisor_count == 0){	
　　　　　　　　　return true;
　　　　　　}else{
　　　　　　　　　return false;
　　　　　　}

　　　}else{
　　　　　　return false;
　　　}
}
