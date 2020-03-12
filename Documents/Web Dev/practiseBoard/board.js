

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
    let row = document.createElement('div');
    row.className = "row";
    for (let j = 0; j < 9; j++) {
        let box = document.createElement('div');
        box.className = "box";
        row.appendChild(box);
    }                
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
