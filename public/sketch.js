
var deck;

function setup() {

  var cnv = createCanvas(1000, 1000);
  var cnvX = (windowWidth - width) / 2;
  var cnvY = (windowHeight - height) / 2;
  cnv.position(cnvX, cnvY);
  background(25);
  // Example Usage:

  var queue = new PriorityQueue()

  queue.push('high', 9)
  queue.push('medium-high', 7)
  queue.push('low', 1)
  queue.push('medium-low', 3)
  queue.push('medium', 5)
 

  while (queue.size()) {
    console.log(queue.pop())
  }
   deck = new Deck();


}

function draw() {

  rect(50,50, 100, 100);
  console.log("Random Card ", deck.randomCard());
  noLoop();


}





