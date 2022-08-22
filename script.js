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
const showOnPixel = 300;

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if(scrollContainer().scrollTop > showOnPixel) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
        }
    });