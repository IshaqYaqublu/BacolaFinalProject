let sideclck = document.getElementById("open-side")
let side1 = document.getElementById("side")
let mark = document.getElementById("marked")

sideclck.addEventListener("click",()=>
{
 
  side1.style.visibility = "visible"
  side1.style.width = "80%"
})


mark.addEventListener("click",()=>
{
  side1.style.visibility = "hidden"
  side1.style.width = "0%"

})




var modal = document.getElementById("myModal1");

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


