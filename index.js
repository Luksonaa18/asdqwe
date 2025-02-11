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
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  (async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

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
  "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  
  // Update the No button's text with the current message
  noButton.textContent = messages[messageIndex];
  
  // Cycle through the messages
  messageIndex = (messageIndex + 1) % messages.length;

  // Update the font size of the Yes button
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes.html";
}

// Adding event listeners for the buttons
document.querySelector('.no-button').addEventListener('click', handleNoClick);
document.querySelector('.yes-button').addEventListener('click', handleYesClick);
