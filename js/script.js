const firstResButton = document.getElementById("first-task-res-button");
const messageField = document.getElementById("messageInputField");
const resField = document.getElementById("first-task-result-field");

firstResButton.addEventListener("click", () => {
  resField.value = slugify(messageField.value);
});

// Друге завдання

const secondResButton = document.getElementById("second-task-res-button");
const firstArray = document.getElementById("firstArrayField");
const secondArray = document.getElementById("secondArrayField");
const maxLength = document.getElementById("maxLengthArray");
const resSecondField = document.getElementById("second-task-result-field");

secondResButton.addEventListener("click", () => {
  resSecondField.value = makeArray(
    firstArray.value.replace(/[\[\],"]/g, "").split(" "),
    secondArray.value.replace(/[\[\],"]/g, "").split(" "),
    maxLength.value
  ).join(", ");
});

// Третє завдання

const thirdResButton = document.getElementById("third-task-res-button");
const numberArray = document.getElementById("third-tasc-message");
const checkNumber = document.getElementById("third-tasc-number");
const resThirdField = document.getElementById("third-task-result-field");

thirdResButton.addEventListener("click", () => {
  console.log(numberArray.value);
  resThirdField.value = filterArray(
    numberArray.value.replace(/[\[\],"]/g, "").split(" "),
    Number.parseInt(checkNumber.value)
  ).join(", ");
});
