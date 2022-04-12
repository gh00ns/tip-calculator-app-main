var activeTip = "";

const b5 = document.querySelector(".btn__5");
const b10 = document.querySelector(".btn__10");
const b15 = document.querySelector(".btn__15");
const b25 = document.querySelector(".btn__25");
const b50 = document.querySelector(".btn__50");

const bReset = document.querySelector(".btn__reset");

const billInput = document.querySelector(".input__bill");
const peopleInput = document.querySelector(".input__people");
const customTipInput = document.querySelector(".btn__custom");

b5.onclick = function () {
  buttonPressed("5");
  inputChanged();
};
b10.onclick = function () {
  buttonPressed("10");
  inputChanged();
};
b15.onclick = function () {
  buttonPressed("15");
  inputChanged();
};
b25.onclick = function () {
  buttonPressed("25");
  inputChanged();
};
b50.onclick = function () {
  buttonPressed("50");
  inputChanged();
};

billInput.onchange = function () {
  inputChanged();
};

peopleInput.onchange = function () {
  inputChanged();
};

customTipInput.onchange = function () {
  buttonPressed("custom");
  inputChanged();
};

// CLICKING TIP %
function buttonPressed(btn_number) {
  if (btn_number == "custom") {
    // custom tip button pressed
    if (
      (activeTip != "") &
      (activeTip == "5" ||
        activeTip == "10" ||
        activeTip == "15" ||
        activeTip == "25" ||
        activeTip == "50")
    ) {
      // predefined tip is still active, then reset button
      var active_var = document.querySelector(".btn__" + activeTip);
      active_var.style.backgroundColor = "";
      active_var.style.color = "";
      activeTip = "";
    }

    activeTip = customTipInput.value;
  } else {
    // predefined tip button pressed
    var q_var = document.querySelector(".btn__" + btn_number);

    if (activeTip == "") {
      // set active
      q_var.style.backgroundColor = "hsl(172, 67%, 45%)";
      q_var.style.color = "hsl(183, 100%, 15%)";
      q_var.style.transition = "all 0.3s";
      customTipInput.value = "";
    } else if (activeTip == btn_number) {
      // reset
      q_var.style.backgroundColor = "";
      q_var.style.color = "";
      btn_number = "";
      customTipInput.value = "";
    } else if (activeTip != btn_number) {
      if (
        activeTip == "5" ||
        activeTip == "10" ||
        activeTip == "15" ||
        activeTip == "25" ||
        activeTip == "50"
      ) {
        // reset previous tip
        document.querySelector(".btn__" + activeTip).style.backgroundColor = "";
        document.querySelector(".btn__" + activeTip).style.color = "";
      }

      // set new tip
      q_var.style.backgroundColor = "hsl(172, 67%, 45%)";
      q_var.style.color = "hsl(183, 100%, 15%)";
      q_var.style.transition = "all 0.3s";
      customTipInput.value = "";
    }

    activeTip = btn_number;
  }
}

// TIP MATH
function inputChanged() {
  var billAmount = Number(billInput.value);
  var peopleAmount = Number(peopleInput.value);
  var tipAmount = Number(activeTip) / 100;

  if ((billAmount != "") & (tipAmount != "") & (peopleAmount != "")) {
    // if values are entered
    var tipTotal = (billAmount * tipAmount) / peopleAmount;
    var total = (billAmount * tipAmount + billAmount) / peopleAmount;

    document.querySelector(".tip__amount__input").textContent =
      "$" + Number(tipTotal).toFixed(2);
    document.querySelector(".total__amount__input").textContent =
      "$" + Number(total).toFixed(2);
  } else {
    // if values aren't entered
    document.querySelector(".tip__amount__input").textContent = "$0.00";
    document.querySelector(".total__amount__input").textContent = "$0.00";
  }
}
