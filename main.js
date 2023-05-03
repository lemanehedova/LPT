function city() {
    var Londontext= "London is the capital city of England.";
    var Paristext = "Paris is the capital of France.";
    var Tokyotext= "Tokyo is the capital of Japan."   
var displayabout=document.getElementById("txt")
if (city=="London") {
    
    displayabout.innerHTML=Londontext;
    displayabout.classList.add("d-none");

}
if ( city=="Paris"){
    displayabout.innerHTML=Paristext
}
if (city=="Tokyo"){
    displayabout.innerHTML=Tokyotext
  
}
}