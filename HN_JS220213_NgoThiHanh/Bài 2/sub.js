
let listPlayers = JSON.parse(localStorage.getItem("listPlayers"));
let totalScore = 0;

function addPlayer() {
  let play = document.getElementById("playerName").value;
  let score = 0;
  let player = {
    player: play,
    sco: score,
  };
  if (listPlayers == null) {
    listPlayers = [];
  }
  listPlayers.push(player);
  localStorage.setItem("listPlayers", JSON.stringify(listPlayers));
  renderPlayer();
  renderHeader()

}

function renderPlayer() {
  let result = "";
  for (i = 0; i < listPlayers.length; i++) {
    result += `
      <tr  >
          <td id="delete" onclick="remove(${i})">X</td>
          <td><i class="fa-solid fa-crown"></i></td>
          <td>${listPlayers[i].player}</td>
          <td><button onclick="minus(${i})">-</button></td>
          <td id="score">${listPlayers[i].sco}</td>
          <td><button onclick="plus(${i})">+</button></td>
          </tr>
                
      `;
  }
  document.getElementById("table").innerHTML = result;
  document.getElementById("playerName").value = "";
}
renderPlayer();

function remove(pl) {
    listPlayers.splice(pl, 1);
    localStorage.setItem("listPlayers", JSON.stringify(listPlayers));
    renderPlayer();
    renderHeader()
  }
  
  function plus(id) {
    ++listPlayers[id].sco;
    localStorage.setItem("listPlayers", JSON.stringify(listPlayers));
    renderPlayer();
    renderHeader()
  }
  
  function minus(a) {
    --listPlayers[a].sco;
    localStorage.setItem("listPlayers", JSON.stringify(listPlayers));
    renderPlayer();
    renderHeader()
  }

  function renderHeader() {
    let a = 0;
    for (j = 0; j < listPlayers.length; j++) {
      a += listPlayers[j].sco;
      totalScore = a;
    }

    let headerRender = 
    `
      <div class="head-left">
        <h4>Players: <span>${listPlayers.length}</span></h4>
        <h4>Total Points: <span>${totalScore}</span></h4>
      </div>
      <div class="title">
          <h1>Rikkei Scoreboard</h1>
      </div>
      <div class="head-right">
        <div class="watch-field">
          <div class="watch">Stopwatch</div>
          <span>0</span>
        </div>
        <div class="watch-button">
          <button>start</button>
          <button>Stop</button>
          <button onclick="reset()">Reset</button>
        </div>
    </div>
    `;
  
    document.getElementById("header").innerHTML = headerRender;
  }
  renderHeader();
