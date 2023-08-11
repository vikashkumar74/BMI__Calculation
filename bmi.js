document.querySelector(".submit").addEventListener('click', function () {

  const ageval = document.querySelector("#ages").value;
  const heightval = document.querySelector('#height').value;
  const weightval = document.querySelector("#weight").value;
  let vale = document.querySelector('.gender').textContent;
  const bmival = (weightval / (heightval ** 2 / 10000)).toFixed(2);
  if (!ageval) {
    alert("please enter your Age");

  }
  else {
    document.querySelector(".bmii").textContent = "Total BMI" + " :-" + " " + bmival;
    if (bmival < 18) {
      document.querySelector(".para").textContent = " You are under weight";
    }
    else if (bmival >= 18 && bmival < 25) {
      console.log(document.querySelector(".para").textContent = "You weight is Normal");

    }
    else if (bmival > 25 && bmival < 29) {
      document.querySelector(".para").textContent = "You weight is over(Do Exercise)";
    }
    if (bmival > 29) {
      document.querySelector(".para").textContent = "You weight obese(Do Exercise)";
    }
  }
});
