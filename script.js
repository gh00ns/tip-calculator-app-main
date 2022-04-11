var activeTip = "";

const b5 = document.querySelector(".btn__5");
const b10 = document.querySelector(".btn__10");
const b15 = document.querySelector(".btn__15");
const b25 = document.querySelector(".btn__25");
const b50 = document.querySelector(".btn__50");

const bReset = document.querySelector(".btn__reset");

b5.onclick = function () {
  buttonPressed("5");
};
b10.onclick = function () {
  buttonPressed("10");
};
b15.onclick = function () {
  buttonPressed("15");
};
b25.onclick = function () {
  buttonPressed("25");
};
b50.onclick = function () {
  buttonPressed("50");
};

// CLICKING TIP %
function buttonPressed(btn_number) {
  var q_var = document.querySelector(".btn__" + btn_number);

  if (activeTip == "") {
    // set active
    q_var.style.backgroundColor = "hsl(172, 67%, 45%)";
    q_var.style.color = "hsl(183, 100%, 15%)";
    q_var.style.transition = "all 0.3s";
  } else if (activeTip == btn_number) {
    // reset
    q_var.style.backgroundColor = "";
    q_var.style.color = "";
    btn_number = "";
  } else if (activeTip != btn_number) {
    // reset previous tip
    document.querySelector(".btn__" + activeTip).style.backgroundColor = "";
    document.querySelector(".btn__" + activeTip).style.color = "";
    // set new tip
    q_var.style.backgroundColor = "hsl(172, 67%, 45%)";
    q_var.style.color = "hsl(183, 100%, 15%)";
    q_var.style.transition = "all 0.3s";
  }

  activeTip = btn_number;
}
