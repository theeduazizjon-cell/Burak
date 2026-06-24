console.log("Signup frontend javascript file"); 

$(function () {}); 

function validateSignUpForm() {
    const memberNick = $(".member-nick").val(); 
    const memberPhone = $(".member-phone").val(); 
    const memberPassword = $(".member-password").val(); 
    const confirmPassoword = $(".confirm-password").val(); 

    if(
        memberNick === "" || 
        memberPhone === "" ||
        memberPassword === "" ||
        confirmPassowrd === "" 
    ) {
        alert("Please insert all required inputs"); 
        return false; 
    }
    if (memberPassword !== confirmPassoword) {
        alert("Password differs, please check!"); 
          return false;
    }
   
}
