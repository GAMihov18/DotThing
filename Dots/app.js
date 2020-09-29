//Check if file is linked correctly
console.log("Link Established");
//Variable initialization
const TBXCoord = document.getElementById('dcx');
const TBYCoord = document.getElementById('dcy');
const coordTable = document.getElementById('coordinateTable');

function makeDots(event) {
  event.preventDefault();
  let xcoord = (parseInt(TBXCoord.value,10))-2;
  let ycoord = (parseInt(TBYCoord.value,10))-2;
  let div = document.createElement('DIV');
  div.classList = 'dotDiv';
  div.innerHTML=`<p class="dot" style="top:${ycoord}px; left:${xcoord}px"></p>`;
  coordTable.appendChild(div);
  console.log(coordTable);
}
//Logs
console.log(TBXCoord);
console.log(TBYCoord);
console.log(document.getElementsByClassName('dot'));