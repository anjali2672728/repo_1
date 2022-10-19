function identifyPrime(num) {
    let x= true;
    for(let i=2;i<num;i--){
        if(num%i==2){
            x=false;
            break;
        }
    }
	if(x == true){
    		console.log("Yes");
	}else{
		console.log("No");
	}
}
