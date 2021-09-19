let stockInitialEL = document.querySelector("#input-initialprice");
let stockCurrentEL = document.querySelector("#input-currprice");
let stockQtyEL = document.querySelector("#input-qty");
let checkBtn = document.querySelector("#check");
let clearBtn = document.querySelector("#clear");
let output = document.querySelector("#output");

function inputValidator(initialPrice, currPrice, qty) {
  let arr;
  let iPrice = parseInt(initialPrice);
  let cPrice = parseInt(currPrice);
  let q = parseInt(qty);
  if (!initialPrice || !currPrice || !qty) {
    arr = [0, "Please enter all values!"];
  } else if (iPrice <= 0 || cPrice < 0 || q < 0) {
    arr = [0, "Values can not be -ve."];
  } else if (q === 0) {
    arr = [0, "Quantity can not be 0."];
  } else {
    arr = [1, ""];
  }

  return arr;
}

function calculate(initialPrice, currPrice, quantity) {
  let initial = parseInt(initialPrice);
  let curr = parseInt(currPrice);
  let qty = parseInt(quantity);

  totalCp = initial * qty;
  val = curr - initial;
  absChange = val * qty;
  perChange = (absChange / totalCp) * 100.0;

  perChange = perChange.toFixed(4);
  return [absChange, perChange];
}

function displayMsg(ans) {
  if (ans[0] === 0) {
    msg = "Hey, all looks static. You are not making any profit/loss.";
  } else if (ans[0] > 0) {
    msg = `Hurray 😃  you are making a net Profit of ${ans[0]} and the percent profit is ${ans[1]}% `;
    output.classList.add("profit");
  } else {
    output.classList.add("loss");
    if (ans[0] > -50)
      msg = `Sorry 😨 you are making a loss of ${
        ans[0]
      } and the percent loss is ${ans[1] * -1}%`;
    else
      msg = `Brace up, tough times ahead 😭 You are making a Loss of ${
        ans[0]
      } and the percent loss ${ans[1] * -1}%`;
  }
  return msg;
}

checkBtn.addEventListener("click", () => {
  let initialPrice = stockInitialEL.value;
  let currPrice = stockCurrentEL.value;
  let qty = stockQtyEL.value;

  // Removing pre-existing applied class, if any
  output.classList.remove("profit");
  output.classList.remove("loss");

  let msg;

  let checkArr = inputValidator(initialPrice, currPrice, qty);
  msg = checkArr[1];

  if (checkArr[0]) {
    //Profit/loss fn
    let arr = calculate(initialPrice, currPrice, qty);

    //Msg logic
    msg = displayMsg(arr);
  }
  output.innerText = msg;
  stockInitialEL.value = "";
  stockQtyEL.value = "";
  stockCurrentEL.value = "";
});

clearBtn.addEventListener("click", (e) => {
  stockInitialEL.value = "";
  stockQtyEL.value = "";
  stockCurrentEL.value = "";
  output.innerText = "";

  // Removing pre-existing applied class, if any
  output.classList.remove("profit");
  output.classList.remove("loss");
});
