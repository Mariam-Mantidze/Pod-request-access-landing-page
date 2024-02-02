const button = document.querySelector("button");
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", (event) => {
  console.log("Form submission attempted."); // test

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(input.value)) {
    event.preventDefault();
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "";
  }
});
