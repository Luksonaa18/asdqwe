const emailInput = document.getElementById("email");
const passlInput = document.getElementById("password");
const sublInput = document.getElementById("submit");
const emailRegEx =
  /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/;
const validEmail = "basibusi@gmail.com";
const validPassword = "Bubusi1717";

const divMessage = document.createElement("div");
const h1Message = document.createElement("h1");
h1Message.textContent = "ყოცაღ პუწიანო";
divMessage.appendChild(h1Message);
divMessage.classList.add("shown");

const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];
let messageIndex = 0;
function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];

  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes.html";
}

document.querySelector(".no-button").addEventListener("click", handleNoClick);
document.querySelector(".yes-button").addEventListener("click", handleYesClick);

sublInput.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;
  if (emailInput.value === "" || !emailRegEx.test(emailInput.value)) {
    emailInput.style.outline = "1px solid red";
    valid = false;
  } else {
    emailInput.style.outline = "none";
  }
  if (passlInput.value === "") {
    passlInput.style.outline = "1px solid red";
    valid = false;
  } else {
    passlInput.style.outline = "none";
  }
  if (emailInput.value !== validEmail || passlInput.value !== validPassword) {
    alert("Invalid email or password!");
    valid = false;
  }

  if (valid) {
    if (!document.body.contains(divMessage)) {
      document.body.appendChild(divMessage);

      setTimeout(() => {
        if (document.body.contains(divMessage)) {
          document.body.removeChild(divMessage);
        }

        window.location.href = "index2.html";
      }, 2000);
    }
  } else {
    if (document.body.contains(divMessage)) {
      document.body.removeChild(divMessage);
    }
  }
});

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
