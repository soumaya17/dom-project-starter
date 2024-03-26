// get all class buttons
var plusBtns = document.getElementsByClassName("fa-square-plus");
console.log(plusBtns);

// loop through plusBtns and add event listner to every plus Button
for (let i = 0; i < plusBtns.length; i++) {
  const element = plusBtns[i];
  element.addEventListener("click", function (event) {
    element.previousElementSibling.innerText++;
    calculedTotal();
    // console.log(event.target);
  });
}

// get all minus butons
var minusBtns = document.getElementsByClassName("fa-square-minus");

// loop through minusBtns and add event listner to every minus Button
for (let i = 0; i < minusBtns.length; i++) {
  const element = minusBtns[i];
  element.addEventListener("click", function (event) {
    if (element.nextElementSibling.innerText > 0) {
      element.nextElementSibling.innerText--;
      calculedTotal();
    }
  });
}

// get all like buttons
var likeBtns = document.getElementsByClassName("fa-thumbs-up");

// loop through likeBtns and add event listner to every like Button
for (let i = 0; i < likeBtns.length; i++) {
  const element = likeBtns[i];
  element.addEventListener("click", function (event) {
    element.classList.toggle("liked");
  });
}

// get all remove buttons
var removeBtns = document.getElementsByClassName("fa-trash");

//  loop through removeBtns and add event listner to every remove Button
for (let i = 0; i < removeBtns.length; i++) {
  const element = removeBtns[i];
  element.addEventListener("click", function (event) {
    element.closest(".single-item").remove();
    calculedTotal();
  });
}

// calculed total price
function calculedTotal() {
  var total = 0;
  // get total price
  var totalPrice = document.getElementById("total");
  // get all product
  var singleItems = document.getElementsByClassName("single-item");
  //loop through single-item
  for (let i = 0; i < singleItems.length; i++) {
    const element = singleItems[i];
    var unitPrice = element.querySelector(".price").innerText;
    var quantity = element.querySelector(".quantity").innerText;
    total = total + unitPrice * quantity;
  }
  totalPrice.innerText = total;
}
calculedTotal();
