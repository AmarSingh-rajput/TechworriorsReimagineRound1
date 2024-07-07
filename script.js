var  body = document.querySelector("body");
var theme = document.querySelector(".theme");

theme.addEventListener("click", function(){
    var currenttheme = body.getAttribute("class");
    if(currenttheme == "light"){
        body.setAttribute("class","dark");
    theme.innerHTML =`<i class="ri-sun-fill"></i>`
    }else{
        body.setAttribute("class","light");
    theme.innerHTML =`<i class="ri-moon-fill">`
    }
})

var images = document.querySelectorAll(".home > div");
var leftBtn = document.querySelector("#leftBtn");
var rightBtn = document.querySelector("#rightBtn");
let currentindex = 0;

function updateZIndex() {
    images.forEach((div, index) => {
      div.style.zIndex = index === currentindex ? '10' : '0';

    });
  }

  function swipeLeft() {
    currentindex = (currentindex > 0) ? currentindex - 1 : images.length - 1;
    updateZIndex();
  }

  function swipeRight() {
    currentindex = (currentindex < images.length - 1) ? currentindex + 1 : 0;
    updateZIndex();
  }

  document.getElementById('leftBtn').addEventListener('click', () => {
    swipeLeft();
    resetAutoSwipe();
  });
  document.getElementById('rightBtn').addEventListener('click', () => {
    swipeRight();
    resetAutoSwipe();
  });


  updateZIndex();


  let autoSwipeInterval = setInterval(swipeRight, 4000);

  function resetAutoSwipe() {
    clearInterval(autoSwipeInterval);
    autoSwipeInterval = setInterval(swipeRight, 4000);
  }

  var tl = gsap.timeline()

tl.from(".nav,.nav div a ,.nav div h2",{
  y:-50,
  duration:1,
  delay:0.1,
  opacity:0,
  stagger:0.2
})

tl.from(".home",{
  duration:2,
  opacity:0,

})

tl.from(".offer .left ",{
  x:-200,
  opacity:0,
  duration:0.2
})



tl.from(".offer .right h1,.right h2,.right button",{
  opacity:0,
  x:200,
  duration:0.5,
  stagger:0.2
})

tl.from(".products h1",{
  y:-50,
  duration:1,
  delay:0.1,
  opacity:0,
  stagger:0.2
})

tl.from(".cards",{
  y:100,
  duration:1,
  delay:0.1,
  opacity:0,
  stagger:0.2
})
  