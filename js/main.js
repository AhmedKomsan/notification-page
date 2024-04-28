const btn = document.querySelector(".btn");
const content = document.querySelectorAll(".content");
const points = document.querySelectorAll(".point");
const unRead = document.querySelectorAll(".un-read") ;
let numbers = document.querySelector(".number");
let counter = unRead.length
numbers.innerHTML = counter;

btn.addEventListener("click" , () => {
    content.forEach((card) => {
        card.classList.remove("un-read")
    });
    points.forEach((dot) => {
        dot.style.display = "none"
        // point.style.display = "none";
    });
    numbers.innerHTML = "0"
});


unRead.forEach((card) => {
    if (card.classList.contains("un-read")) {
      card.addEventListener("click", () => {
        card.classList.remove("un-read");
        const point = card.querySelector(".point");
        point.style.display = "none";
        handleCounter();
      });
    }
  });
  
  function handleCounter() {
    if (counter >= 1) {
      counter--;
    }
    numbers.innerHTML = counter;
  }



// unreadBoxes.forEach((unreadBox) => {
//   unreadBox.addEventListener("click", (e) => {
//     unreadBox.classList.remove("un-read");
//     handleMinus();
//   });
// });

// toggleMark.addEventListener("click", () => {
//   allBoxes.forEach((box) => {
//     box.classList.remove("un-read");
//     countBoxes.innerHTML = 0;
//   });
// });

// function handleMinus() {
//   if (amount >= 1) {
//     amount--;
//   }
//   countBoxes.innerHTML = amount;
// }