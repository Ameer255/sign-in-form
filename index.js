
let email1="pakistan@gmail.com";
let password1 = "pakistan";



function checkEmail(){
    
    let email = document.getElementById("email");
    
     let warning =  document.querySelectorAll('.warning');

     let emailConfirmed=(email.value==email1);


    if (emailConfirmed){

     
     warning[0].style.display="none";
     return true;
     

    }

    else {
        
       
        warning[0].innerHTML="Incorrect Email";
        warning[0].style.display="block";
        return false;
        
        
       }
    
    
}



function checkPassword(){

    

    let password = document.getElementById("pass1").value;
    let confirm=document.getElementById("confirm").value;
     let confirmation=document.getElementById("confirmation");

     let pconfirmed=(password==password1 && confirm==password);

     if (!pconfirmed){
    
        confirmation.innerHTML="<p>Your passwords don't match";
        return false;
     
     
    }

    else {
        return true;
    }

}


 function password(){
    window.open("password.html");
   
    
 }

function success(){
    window.open("success.html");
}




    
      
    

  



