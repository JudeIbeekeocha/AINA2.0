// Option 1

// const sendButton = document.querySelector(".send-button");
// const inputField = document.querySelector(".input-field");
// let message = [];
// sendButton.onclick = () => {
//   message.push(inputField.value);
//   console.log(inputField.value);
//   inputField.value = "";
//   console.log(message);
// };

// Option 2


let message = []; 

function getUserMessage() {
  const inputField = document.querySelector(".input-field");
  message.push(inputField.value);
  alert(inputField.value);
  inputField.value = "";
  console.log(message);

}
