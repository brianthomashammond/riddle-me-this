
var treasureLocation = "Box" + Math.floor(Math.random() *25 )
var bombLocation = "Box" + Math.floor(Math.random() *25 )
if (bombLocation==treasureLocation && bombLocation != 24) {
  treasureLocation++
}
else if (bombLocation==24 && bombLocation==treasureLocation) {
  treasureLocation--
}
var turnCount = 15
document.getElementById('counter').innerHTML = turnCount
const treasure = (location) => {
 document.getElementById('counter').innerHTML = turnCount--;

  if (location == treasureLocation) {
    document.getElementById(location).innerHTML = '<img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F08%2F17%2F22%2F22%2Fkapow-1601675_960_720.png" alt="Image of batman" height="100px" width="75px">'
    document.getElementById('table').style.pointerEvents = "none"
    setTimeout(() => { alert("You caught me?!\nAlright, you win!"); }, 500);
    document.getElementById('counter').innerHTML = turnCount
    }
   else if (location == bombLocation) {
     document.getElementById(location).innerHTML = '<img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F05%2F24%2F13%2F05%2Fcomic-2340467_960_720.png" alt="Image of batman" height="100px" width="75px">'
     document.getElementById('table').style.pointerEvents = "none"
     setTimeout(() => { alert("BOOM!!\nYou Lose!!!"); }, 500);
     document.getElementById('counter').innerHTML = turnCount
    }
  else if (turnCount == 0) {
    document.getElementById('counter').innerHTML = turnCount
    document.getElementById(location).innerHTML = '<img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F05%2F24%2F13%2F05%2Fcomic-2340467_960_720.png" alt="Image of batman" height="100px" width="75px">'
    setTimeout(() => { alert("Tick...Tick...Tick...\nTime ran out...You Lose!!!"); }, 500);
  }
  else {
    document.getElementById(location).innerHTML = '<img src="https://cdn.pixabay.com/photo/2018/02/07/12/42/batman-3137002_960_720.png" alt="Image of batman" height="100px" width="75px">'
    document.getElementById(location).onclick = ""
    document.getElementById('counter').innerHTML = turnCount
  }
}
