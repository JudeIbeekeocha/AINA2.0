import { fetchResponse } from "./data.js";

const inputField = document.querySelector(".input-field");
const sendButton = document.querySelector(".send-button");
let contentSection = document.querySelector(".content-container");

export function getUserMessage() {
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

export function sendResponseToDOM(response, category) {
  const responseContainer = document.createElement("div");
  const responseMessage = document.createElement("p");

  responseContainer.classList.add("response-content-container");
  if (category === 'title'){
    responseMessage.classList.add("response-message-title");
    responseMessage.textContent =
    response;
  }else if(category === 'body'){
    responseMessage.classList.add("response-message-body");
    responseMessage.textContent =
    response;
  }else if(category === 'publisher'){
    responseMessage.classList.add("response-message-publisher");
    responseMessage.textContent =
    response;
  } else if (category === 'link'){
    responseMessage.innerHTML = `<a href="${response}" target="_blank" class="response-message-source">Source</a>`
    response;
  }

  // responseMessage.textContent =
  //   response;
  responseContainer.appendChild(responseMessage);
  contentSection.appendChild(responseContainer);
}

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const message = getUserMessage()
    addMessageToDOM(message);
    fetchResponse(message);
  }
});
sendButton.addEventListener("click", function () {
  const message = getUserMessage()
  addMessageToDOM(message);
  fetchResponse(message);
});
