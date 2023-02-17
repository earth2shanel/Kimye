let unoscreen = document.querySelector('.option-one-screen');
let unobutton = document.querySelector('.ll');
let dosscreen = document.querySelector('.choice-2-section');
let dosbutton = document.querySelector('.qq');
let storyopener = document.querySelector('.story-opening');
let continueuno = document.querySelector('.hh');
let continuedos = document.querySelector('.oo');
let enduno = document.querySelector('.option-one-end');
let enddos = document.querySelector('.option-two-end');


unobutton.onclick = function() {
    unoscreen.style.display = 'block';
    storyopener.style.display = 'none';
};

dosbutton.onclick = function() {
    dosscreen.style.display = 'block';
    storyopener.style.display = 'none';
};

continueuno.onclick = function() {
    enduno.style.display = 'block';
    unoscreen.style.display = 'none';
};

continuedos.onclick = function() {
    enddos.style.display = 'block';
    dosscreen.style.display = 'none';
};



//INSERT_VARIABLE.onclick=function(){

//};

//*/