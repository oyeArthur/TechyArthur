const form = document.getElementById("inquiry-form");
const nameInput = document.getElementById("name");
const LastNameInput = document.getElementById("Last Name");
const emailInput = document.getElementById("email");
const companyInput = document.getElementById("company");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());
  console.log(formValues);
  // Replace the console.log statement with your own code to process the form data
  // For example, you could use fetch() to send the data to a server
});
