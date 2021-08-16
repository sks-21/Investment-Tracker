let stockInitialEL = document.querySelector("#input-initialprice");
let stockCurrentEL = document.querySelector("#input-currprice");
let stockQtyEL = document.querySelector("#input-qty");
let btn = document.querySelector("button");
let output = document.querySelector("#output");

function check(initial, curr, qty) {
  let val, absChange, perChange, totalCp;
  totalCp = initial * qty;
  val = curr - initial;
  absChange = val * qty;
  perChange = (absChange / totalCp) * 100.0;

  return [absChange, perChange];
}

btn.addEventListener("click", () => {
  let initialPrice = stockInitialEL.value;
  let currPrice = stockCurrentEL.value;
  let qty = stockQtyEL.value;

  let ans = check(initialPrice, currPrice, qty);

  if (ans[0] > 0) msg = "Profit";
  else msg = "Loss";

  output.innerText = msg;
});
