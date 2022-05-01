
var minus = document.getElementById("minus")
var plus = document.getElementById("plus")
var result = document.getElementById("rest")
var count = 1;

minus.addEventListener("click",()=>
{
    
  if(count===1){
    count=1
  }
  else{
    count--;
    result.innerHTML = count
  }
  
})

plus.addEventListener("click",()=>
{
  count++;
  result.innerHTML = count
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



