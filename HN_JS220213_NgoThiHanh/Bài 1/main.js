let options = document.getElementsByClassName("options")[0];
let button = document.getElementsByClassName("button");
let inputValue = document.getElementById("inputValue");
let subcontent = document.getElementById("sub-content");
let count = document.getElementById("count");
let feedback = JSON.parse(localStorage.getItem("feedback"));

console.log(feedback);
// let array = [];
let buttonID;
let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
options.onclick = function (event) {
  buttonID = event.target.id;
  if (buttonID) {
    let back = value.find((e) => e == buttonID);
    if (back) {
      let button2 = document.getElementById(`${back}`);
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("button1");
      }
      button2.classList.add("button1");
    }
  }
};

function sendFeedback() {
  let id = Math.floor(Math.random() * 500);
  if (buttonID == undefined || inputValue.value == "") {
    alert("nhập đầy đủ các trường");
  } else {
    let arr = {
      id: id,
      diem: buttonID,
      value: inputValue.value,
    };
    if (feedback == null) {
      feedback = [];
    }
    feedback.unshift(arr);
    localStorage.setItem("feedback", JSON.stringify(feedback));
    subcontent.innerHTML = feedback.map((e) => {
      return `
      <div class='review'>
          <div class='box'>
              <div class='text-field'>
              <div class='text'>${e.value}</div>
              <div class='num'>
                  <span>${e.diem}</span>
              </div>
              <div class='icons'>
                  <button onclick='editReview()'>
                  <i class='fa-solid fa-pen-to-square'></i>
                  </button>
                  <button id='${e.id}' onclick='deleteReview(${e.id})'>
                  <i class='fa-solid fa-xmark'></i>
                  </button>
              </div>
              </div>
          </div>
      </div>
      `;
    });
    inputValue.value = "";
    console.log(arr);
  }
}
function rendulieu() {
  count.innerHTML = feedback.length;
  subcontent.innerHTML = feedback.map((e) => {
    return `
        <div class='review'>
            <div class='box'>
                <div class='text-field'>
                <div class='text'>${e.value}</div>
                <div class='num'>
                    <span>${e.diem}</span>
                </div>
                <div class='icons'>
                    <button onclick='editReview()'>
                    <i class='fa-solid fa-pen-to-square'></i>
                    </button>
                    <button id='${e.id}' onclick='deleteReview(${e.id})'>
                    <i class='fa-solid fa-xmark'></i>
                    </button>
                </div>
                </div>
            </div>
        </div>
        `;
  });
}
rendulieu();

function deleteReview(id) {
  feedback.forEach((e, i) => {
    if (e.id == id) {
      feedback.splice(i, 1);
      localStorage.setItem("feedback", JSON.stringify(feedback));
      rendulieu();
    }
  });
}
