function makeGrid() {
  let tbl = document.getElementById("pixelCanvas");

  for(let i = 0; i < 16; i++){
    let myRow = document.createElement("tr");
    myRow.id = "row" + i;

    tbl.appendChild(myRow);

    let rowW = document.getElementById("row" + i);

    for(let j = 0; j < 16; j++){
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