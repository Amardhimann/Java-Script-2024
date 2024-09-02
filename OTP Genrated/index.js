//This is otp genrated code .... 


var otpnumber = Math.floor(Math.random()*9999)+999;

function handle() {
    document.getElementById("otp-output").innerHTML = otpnumber;
    
}


document.getElementById("generate-otp").addEventListener("click",handle);
document.getElementById("reset").addEventListener("click", function() {
    location.reload(); // This will refresh the page
});