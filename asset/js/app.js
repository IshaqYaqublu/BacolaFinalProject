$('.slider-cart').slick({
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});














var modal = document.getElementById("myModal");

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


let cate= document.getElementById('home-categories');
let allcate= document.querySelector('.all-categories');


  
cate.addEventListener("click" ,function(e){
  if(allcate.style.display === "block"){
    allcate.style.display="none"  
}
    else{
      allcate.style.display="block"
}
  e.preventDefault();
})
let mySlider = [
    "asset/Photos/1.jpg",
    "asset/Photos/2.jpg"
    
]

let imag = document.getElementById("imgslider")
let current = 0;
imag.src = mySlider[current];

let right = document.querySelector(".right");
let left = document.querySelector(".left");

right.addEventListener("click", function(){
    current++;
    if(current > mySlider.length - 1)
    {
        current = 0;
    }
    imag.src = mySlider[current]
})

left.addEventListener("click", function(){
    current--;
    if(current ==-1)
    {
        current = mySlider.length - 1
    }
    imag.src = mySlider[current]    
})

// function AutoPlay(){
//     current++;
//     if(current > mySlider.length - 1)
//     {
//         current = 0;
//     }
//     imag.src = mySlider[current]
// }
// setInterval(AutoPlay,3000)


function Timer() {
    let text = document.getElementById('date');
    var date = new Date();
    
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(s<10) {
        s = "0" + date.getSeconds();
    }

    text.innerHTML =  `<span id="hour">${48}</span> : <span id="hour">${h}</span> : <span id="hour">${m}</span> : <span id="hour">${s}</span>`
}

setInterval(Timer,1000);
let scrh = document.getElementById('search')
let scrhmob = document.querySelector(".search-s")
scrh.addEventListener('click' , function(e){
  if(scrhmob.style.display==="none"){
    scrhmob.style.display='block'
  }
  else{
    scrhmob.style.display="none"
  }
  e.preventDefault()
})
