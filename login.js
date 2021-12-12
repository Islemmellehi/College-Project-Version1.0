

function veriflogin(){
    var email="admin@gmail.com";
    var password="pass";
    var test=true;

    if((document.getElementById("password").value!=password)&&(document.getElementById("email").value!=email)){
        alert("Your email and address do not match");
        test=false;
    }
    else if (document.getElementById("password").value!=password){
        alert("Password Incorrect");
        test=false;
    }
    else if (document.getElementById("email").value!=email){
        alert("Email doesn't match any account");
        test=false;
    }
    if(test==true){
        alert("Correct Information")
        document.getElementById("sub").disabled=false;
    }

}
