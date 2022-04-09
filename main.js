  let runBtn = document.getElementById("run");
  let stopBtn = document.getElementById("stop");
  let resetBtn = document.getElementById("reset");
  let displayTime = document.getElementById("displayTime");
  let minus = document.getElementById("minus");
  let second = document.getElementById("second");
  let unit = document.getElementById("unit");

  let count = 0;
  let timerId;
  runBtn.onclick = function () {
    timerId = setInterval(() => {
      count += 1;
      //   Second
      let secondValue = Math.floor(count / 10);
      second.innerText = secondValue >= 10 ? secondValue : `0${secondValue}`;

      //   Unit
      unit.innerText = (count % 10) >= 10 ? (count % 10) : `0${count%10}`;

      // Minus
      if (secondValue >= 60) {
        minus.innerText = Math.floor(secondValue / 60);
        second.innerText = secondValue % 60;
      }
    }, 100);
  };

  // Stop
  stopBtn.onclick = () => {
    clearInterval(timerId);
  };

  //   Reset
  resetBtn.onclick = function () {
    clearInterval(timerId);
    unit.innerText = "00";
    second.innerText = "00";
    minus.innerText = "00";
    count = 0;
  };