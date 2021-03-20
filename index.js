console.log('Console log');

const grandparentClickHandler = document
  .querySelector("#grandparent")
  .addEventListener("click", () => {
    console.log("Grandparent input clicked");
  });

const parentClickHandler = document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent input clicked");
  },
  true
);

const childClickHandler = document
  .querySelector("#child")
  .addEventListener("click", () => {
    console.log("Child input clicked");
  });
