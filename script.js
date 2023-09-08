const sødKartoffel = document.querySelector('#button1');
const hundSmiler = document.querySelector(".dogSmile")
sødKartoffel.addEventListener('click', clickHandler);

function clickHandler(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = 'rgb(120, 200, 40)';
  hundSmiler.style.opacity = '1';

  setTimeout(() => {
    hundSmiler.style.opacity = '0';
  }, 2000);
}


const natsværmer = document.querySelector('#button2');
natsværmer.addEventListener('click', clickHandler2);

function clickHandler2(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = 'rgb(120, 200, 40)';
  hundSmiler.style.opacity = '1';

  setTimeout(() => {
    hundSmiler.style.opacity = '0';
  }, 2000);
}


const kål = document.querySelector('#button3');
kål.addEventListener('click', clickHandler3);

function clickHandler3(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = 'rgb(120, 200, 40)';
  hundSmiler.style.opacity = '1';

  setTimeout(() => {
    hundSmiler.style.opacity = '0';
  }, 2000);
}


const ananas = document.querySelector('#button4');
ananas.addEventListener('click', clickHandler4);

function clickHandler4(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = 'rgb(120, 200, 40)';
  hundSmiler.style.opacity = '1';

  setTimeout(() => {
    hundSmiler.style.opacity = '0';
  }, 2000);
}


const honning = document.querySelector('#button5');
honning.addEventListener('click', clickHandler5);

function clickHandler5(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = 'rgb(120, 200, 40)';
  hundSmiler.style.opacity = '1';

  setTimeout(() => {
    hundSmiler.style.opacity = '0';
  }, 2000);
}


const puppuccino = document.querySelector('#button9');
puppuccino.addEventListener('click', clickHandler9);

function clickHandler9(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = 'rgb(120, 200, 40)';
  hundSmiler.style.opacity = '1';

  setTimeout(() => {
    hundSmiler.style.opacity = '0';
  }, 2000);
  
}


const chokolade = document.querySelector('#button6');
chokolade.addEventListener('click', clickHandler6);

function clickHandler6(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = ('red');
  hundPåTønden.style.opacity ="1";
  
  setTimeout(() => {
    hundPåTønden.style.opacity = '0';
  }, 2000);
}


const vindruer = document.querySelector('#button7');
vindruer.addEventListener('click', clickHandler7);

function clickHandler7(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = ('red');
  hundPåTønden.style.opacity ="1";

  setTimeout(() => {
    hundPåTønden.style.opacity = '0';
  }, 2000);
}

const avocado = document.querySelector('#button8');
avocado.addEventListener('click', clickHandler8);

function clickHandler8(evt){
  console.log(evt.target);
  evt.target.style.backgroundColor = ('red');
  hundPåTønden.style.opacity ="1";

  setTimeout(() => {
    hundPåTønden.style.opacity = '0';
  }, 2000);
}

const spangsbergFlødeboller = document.querySelector('#button10');
const hundPåTønden = document.querySelector(".dogPoop")
spangsbergFlødeboller.addEventListener('click', clickHandler10);

function clickHandler10(evt) {
  console.log(evt.target);
  evt.target.style.backgroundColor = ('red');
  hundPåTønden.style.opacity ="1";
  
  setTimeout(() => {
    hundPåTønden.style.opacity = '0';
  }, 2000);
}
