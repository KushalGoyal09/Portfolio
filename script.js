// set up text to print, each item in array is new line
var aText = new Array(
    "Hello World!!", 
    "Hello to Readers"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
     
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
     
function typewriter() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
     
    while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
    } else {
      setTimeout("typewriter()", iSpeed);
    }
}
    
typewriter();

const gmailIcon = document.getElementById('gmail')
const twitterIcon = document.getElementById('twitter')
const linkedinIcon = document.getElementById('linked-in')
const instaIcon = document.getElementById('insta')
const githubIcon = document.getElementById('github')

twitterIcon.addEventListener('click', ()=>{
    window.location = 'https://twitter.com/Kushal__Goyal?t=9xw21rQR_4ZCOLqPPSeWwg&s=35'
})
linkedinIcon.addEventListener('click', ()=>{
    window.location = 'https://www.linkedin.com/in/kushal-goyal'
})
instaIcon.addEventListener('click', ()=>{
    window.location = 'https://instagram.com/kushal.io?igshid=ZDdkNTZiNTM='
})
githubIcon.addEventListener('click', ()=>{
    window.location = 'https://github.com/KushalGoyal-Programmer'
})

const home = document.getElementById('list1')
const mySkills = document.getElementById('list2')
const about = document.getElementById('list3')
const contact = document.getElementById('list4')

home.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
mySkills.addEventListener('click', ()=>{
    document.body.scrollTop = 350;
    document.documentElement.scrollTop = 350;
})
about.addEventListener('click', ()=>{
    document.body.scrollTop = 870;
    document.documentElement.scrollTop = 870;
})
contact.addEventListener('click', ()=>{
    document.body.scrollTop = 1500;
    document.documentElement.scrollTop = 1500;
})