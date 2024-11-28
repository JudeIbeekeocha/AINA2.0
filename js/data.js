import { sendResponseToDOM } from "./main-section.js";

export function fetchResponse(message) {
  let dataToSend = {
    ticker: message,
  };
  console.log(dataToSend)

  fetch("http://127.0.0.1:5000/receive-json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);
      let res = data.received_data
      sendResponseToDOM(res.title, 'title')
      sendResponseToDOM(res.publisher, 'publisher')
      sendResponseToDOM(res.body, 'body')
      sendResponseToDOM(res.link, 'link')
    });
}
