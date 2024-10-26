const inputField = document.querySelector(".input-field");
const sendButton = document.querySelector(".send-button");
let contentSection = document.querySelector(".content-container");

function getUserMessage() {
  let message = ""; // I can take this out later and use as a return function
  message = inputField.value;
  inputField.value = "";
  return message;
}

// Create a function that adds the message to the DOM with some styles
function addMessageToDOM(message) {
  const userContainer = document.createElement("div");
  const userMessage = document.createElement("p");

  userContainer.classList.add("user-content-container");
  userMessage.classList.add("user-message");
  userMessage.textContent = message;
  userContainer.appendChild(userMessage);
  contentSection.appendChild(userContainer);
}

function sendResponseToDOM(message) {
  const responseContainer = document.createElement("div");
  const responseMessage = document.createElement("p");

  responseContainer.classList.add("response-content-container");
  responseMessage.classList.add("response-message");

  responseMessage.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident atque quibusdam quas, saepe inventore ullam qui deleniti.";
  responseContainer.appendChild(responseMessage);
  contentSection.appendChild(responseContainer);
}

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addMessageToDOM(getUserMessage());
    sendResponseToDOM(getUserMessage());
  }
});
sendButton.addEventListener("click", function () {
  addMessageToDOM(getUserMessage());
  sendResponseToDOM(getUserMessage());
});
