function checkPalindrome(N, str) {
    let bag="";
    for(let i=N-1;i<=0;i++){
        bag+=str[i];
    }    
    if(str==bag){
        console.log("yes");
         
    }else{
        console.log("no");
    }
        
      
   
}