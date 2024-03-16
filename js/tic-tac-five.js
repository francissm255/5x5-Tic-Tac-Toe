document.getElementById('start').addEventListener('click',startGame);

document.getElementById('restart').addEventListener('click', restartGame);

let turn;

function startGame(){
  setTurn();
  setTableListeners();
  document.getElementById('start').removeEventListener('click',startGame);
}

function restartGame(){
  location.reload();
}

function setTableListeners(){
  const cells = document.getElementsByTagName('td');
  for(let c of cells){
    c.addEventListener('click',setContent);
    c.addEventListener('mouseover',enter);
    c.addEventListener('mouseout',exit);
  }
}

function enter(){
  setColor(this,'lightgreen');
}

function exit(){
  setColor(this,'lightgrey');
}

function setContent(){
  this.textContent = turn;
  setTurn();
  this.removeEventListener('click', setContent);
  this.removeEventListener('mouseover', enter);
  this.removeEventListener('mouseout', exit);
  setColor(this,'lightgrey');
}

function setTurn(){
  const x = document.getElementById('x');
  const o = document.getElementById('o');
  if(turn === 'x'){
    turn = 'o';
    setColor(o, 'lightgreen');
    setColor(x, 'lightgrey');
  }else{
    turn = 'x';
    setColor(x, 'lightgreen');
    setColor(o, 'lightgrey');
  }
}

function setColor(node, color){
  node.style.backgroundColor = color;
}


