let plus = document.querySelector(".plus");
let box = document.querySelector(".box");
let min = document.querySelector(".min");

plus.onclick = function() {
	plus.classList.toggle("active");
	box.classList.toggle("active");
}

min.onclick = function() {
	min.classList.toggle("active");
	box.classList.toggle("active");
}



var header = document.getElementById("header");
var content = document.getElementById("content");
var wwd = document.getElementById("wwd");
var hh = header.offsetHeight;

window.addEventListener("scroll", function() {
  if (pageYOffset < content.offsetTop - hh) {
    changeImage("Assets/Logo-1.png");
	document.getElementById("plus").style.color = "white";
  }

  else if ((pageYOffset >= content.offsetTop - hh) && (pageYOffset <= content.offsetTop)) {
    changeImage("Assets/Logo-2.png");
	document.getElementById("plus").style.color = "black";
  }
})

function changeImage(a) {
  document.getElementById("logo").src = a;
}


  