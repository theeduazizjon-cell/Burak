console.log("Signup frontend javascript file"); 

$(function () {
    constTarget =$(".file-box .upload-hidden");
    let filename; 

    fileTarget.on("change", function () {
        if(window.FileReader) {
            const 
                uploadFile = $(this)[0].files[0], 
                fileType = uploadFile["type"], 
                validImageType = ["image/jpg", "image/jpeg", "image/png"];
            
            if(!validImageType.includes(fileType)) {
                alert("Please insert only jpeg, jpg and png!"); 
            }else{
                if(uploadFile) {

                    console.log(URL.createObjectURL(uploadFile)); 
                    $(".upload-img-frame")
                    .attr("src",URL.createObjectURL(uploadFile))
                    .addClass("success"); 
                }
                filename = $(this)[0].files[0].name; 

            }
            $(this).siblings(".upload-name").val(filename);
        }
    });
}); 

function validateSignUpForm() {
    const 
     memberNick = $(".member-nick").val(), 
     memberPhone = $(".member-phone").val(),  
     memberPassword = $(".member-password").val(),  
     confirmPassoword = $(".confirm-password").val(); 

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
   
    const memberImage = $(".member-image").get(0).files[0].name
        ? $(".member-image").get(0).files[0].name 
        : null;
    if (!memberImage) {
        alert("Please insert restaurant image!"); 
        return false; 
    }

}
