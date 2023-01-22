const emojis = document.querySelectorAll(".far");
const stars = document.querySelectorAll(".fa");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];
const btn = document.querySelector(".btn");
const message = document.querySelector(".message-box");
const text = document.getElementById("text");
const canceal = document.querySelector(".fa-solid");
console.log(text);

updateRating(0);

stars.forEach((star, index) => {
  star.addEventListener("click", function () {
    updateRating(index);
    button();
  });
});

function updateRating(index) {
  stars.forEach((items, idx) => {
    if (idx < index + 1) {
      items.classList.add("active");
    } else {
      items.classList.remove("active");
    }
    if (index <= 2) {
      text.innerHTML = ` UNSATISFIED! sorry for the bad service we will try to improve our performace.`;
    } else {
      text.innerHTML = `SATISFIED! thanks for the feedback.`;
    }
  });

  emojis.forEach((emoji) => {
    emoji.style.transform = `translateX(-${index * 100}%)`;
    emoji.style.color = colorsArray[index];
  });
}
function button() {
  btn.classList.add("show");
}

btn.addEventListener("click", function () {
  result();
});

function result() {
  stars.forEach((star, idx) => {
    btn.addEventListener("click", function () {
      console.log(idx);
      console.log(star.currentTarget.idx);
    });
    message.classList.add("open");
  });
}

canceal.addEventListener("click", function () {
  message.classList.remove("open");
  updateRating(0);
  btn.classList.remove("show");
});
