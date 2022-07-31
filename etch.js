function renderOptions() {
  let size = prompt("Please enter your desired grid size.");
  makeGrid(size);
}

function makeGrid(x = 16) {
  if (document.body.contains(document.getElementsByTagName("tr")[0])){
    console.log("table rows detected! 👍( ͡❛ ͜ʖ ͡❛👍)");
    document.getElementById("pixelCanvas").innerHTML = "";
    console.log("Removing table rows! (ノಠ益ಠ)ノ ┻━┻")
  } else {
    console.log("no table rows detected! ( ͡❛ _> ͡❛)👎");
  };

  let tbl = document.getElementById("pixelCanvas");

  for(let i = 0; i < x; i++){
    let myRow = document.createElement("tr");
    myRow.id = "row" + i;

    tbl.appendChild(myRow);

    let rowW = document.getElementById("row" + i);

    for(let j = 0; j < x; j++){
      let myCell = document.createElement("td");
      rowW.appendChild(myCell);
    }
  }

  tbl.addEventListener('mouseover', function() {
    event.target.classList.add('onHover');
  });

  /*$('td').click(function addColor() {
    console.log("adding color...");
    color = "black";

    if ($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })*/

}

window.onload = makeGrid();