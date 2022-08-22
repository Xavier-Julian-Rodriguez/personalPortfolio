/*event listener for current date to load on html page*/
let output = document.getElementById('output');

addEventListener('load', () => {
    let date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `As of: ${month}-${day}-${year}`;
    output.innerText = currentDate;

});

/*event listener and scroll down funcvtion with conditions for scroll to top button*/
const backToTop = document.getElementById('backToTop');
let YPosition = window.scrollY;

window.addEventListener('scroll', () => {
    if(YPosition < 300){
        backToTop.classList.add('scrollUp--hidden')
    } else {
        backToTop.classList.remove('scrollUp--hidden')
    }
    YPosition = window.scrollY;
    
})


    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });
    
    typewriter
      .pauseFor(2500)
      .typeString("Hi, I'm Xavier Julian Rodriguez.")
      .pauseFor(3000)
      .deleteChars(32)
      .typeString('Welcome To My Portfolio.')
      .pauseFor(3000)
      .start();