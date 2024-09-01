// textValue = document.getElementById("data").value;
// console.log(textValue);

// fullstring = "";

// document.getElementById("data").addEventListener("input",function(Event){
    
//     // console.log(Event.key)
//     var fullString = document.getElementById("data").value;

//     // output(fullString);


// });

function output(){
    var fullString = document.getElementById("data").value.replace(/\s+/g, '');

    var newvalue = fullString.length;
   
    document.getElementById("lengthDisplay").innerHTML = newvalue;
}

document.getElementById("showLengthButton").addEventListener("click",output);

