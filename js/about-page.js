// Select all buttons with the class "mvt-button"
const buttons = document.querySelectorAll(".mvt-button");
const collapseDivs = document.querySelectorAll(".collapse");

// Select the hidden content section
const hiddenContent = document.querySelector(".hidden-content-section");

function toggleSelection(index) {
  // first, hide all content sections
  collapseDivs.forEach((div, i) => {
    // show only the clicked one; hide others
    if (i === index) {
      div.classList.add("show"); // Toggle show class on the clicked one
    } else {
      div.classList.remove("show"); // Remove show class from all others
    }
  });
}

// Add a click event listener to each button
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Set the display of the hidden content to block
    toggleSelection(index);
  });
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const tooltipTrigger = document.getElementById('modalTooltipButton');
// Event listener to open the modal on click
tooltipTrigger.addEventListener("click", () => {
  const myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
});
