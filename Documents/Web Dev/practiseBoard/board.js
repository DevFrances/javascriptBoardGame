

let images = [
  'images/dynamite.jpeg',
  'images/gun.jpeg',
  'images/bomb.png',
  'images/knife.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/player1.jpeg',
  'images/player2.png'
]

function start() {
  for (let i = 0; i < 9; i++) {
    //let row = document.createElement('div');//if you understand html, you dont need javascript to do this;
    let row = '<div class='row'>';
    for (let j = 0; j < 9; j++) {
        row += '<div class='box'></div>';
    }   
    row += '</div>';
    //generating your html this way gives you so much power to do a lot of dynamic stuff - this in effect opens up the way for you to understand how angualr or react works!
    //Just felt I should share cause I have won a lot of 'wars' doing it this way!
    //Just my personal taste though!!!
    document.getElementById('boxParent').appendChild(row);
 }
 let elements = document.getElementsByClassName('box')

 for (let i = 0; i < 18; i++) {
   let randomNumber = getRandomNumber(elements.length)
   let box = elements[randomNumber]
   let image = images[i]
   box.innerHTML = `<img src=${image} alt="Image"/>`
 }
}



function getRandomNumber(length){
  return Math.floor(Math.random()* length)
};
