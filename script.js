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

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.toggle("sticky", window.scrollY > 0);
	}
}

/*-----------------------------------------------------------------*/

const text=document.getElementById("quotes");
const author=document.getElementById("author");

const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;
}
getNewQuote();

/*-----------------------------------------------------------------*/

const mediaQuery1 = window.matchMedia('(min-width: 900px)')
const mediaQuery2 = window.matchMedia('(max-width: 900px)')
const mediaQuery3 = window.matchMedia('(max-width: 770px)')

const check = document.getElementById('check');

const qtitle = document.getElementById('quoteTitle');
const qbtn = document.getElementById('qbtn');
const qdecor1 = document.querySelector('.quote-decoration-1');
const qdecor2 = document.querySelector('.quote-decoration-2');
const qdecor3 = document.querySelector('.quote-decoration-3');
const qdecor4 = document.querySelector('.quote-decoration-4');
const qdecor5 = document.querySelector('.quote-decoration-5');

function decor1(e) {
	if(e.matches) {
		check.addEventListener('click', () => {
			check.style.display = 'none';
			
			qtitle.style.display = 'none';
			qbtn.style.display = 'none';
			
			qdecor1.style.transform = 'translate(-17%, -60%)';
			qdecor1.style.transform += 'scale(.6)';

			qdecor2.style.transform = 'translate(-33%, -45%)';
			qdecor2.style.transform += 'scale(.8)';

			qdecor3.style.transform = 'translate(10%, -50%)';
			qdecor3.style.transform += 'scale(.7)';

			qdecor4.style.transform = 'translate(-20%, -30%)';
			qdecor4.style.transform += 'scale(.6)';

			qdecor5.style.transform = 'translate(40%, 0%)';
			qdecor5.style.transform += 'scale(.7)';
		})
	}
}

function decor2(e) {
	if(e.matches) {
		check.addEventListener('click', () => {
			check.style.display = 'none';

			qtitle.style.display = 'none';
			qbtn.style.display = 'none';

			qdecor4.style.marginTop = "27.4%";
			qdecor5.style.marginTop = "26.3%";
		})
	}
}

function decor3(e) {
	if(e.matches) {
		check.addEventListener('click', () => {
			check.style.display = 'none';

			qtitle.style.display = 'none';
			qbtn.style.display = 'none';

			qdecor4.style.marginTop = "33.4%";
			qdecor5.style.marginTop = "32.4%";
		})
	}
}

mediaQuery1.addListener(decor1)
decor1(mediaQuery1)
mediaQuery2.addListener(decor2)
decor2(mediaQuery2)
mediaQuery3.addListener(decor3)
decor3(mediaQuery3)