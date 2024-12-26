const firstResButton = document.getElementById("first-task-res-button");
const messageField = document.getElementById("classInputField");
const boxSize = document.getElementById("box-size");
const resField = document.getElementById("first-task-result-field");

firstResButton.addEventListener("click", () => {
  resField.value = String(
    isEnoughCapacity(
      JSON.parse(
        messageField.value.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
      ),
      Number.parseInt(boxSize.value)
    )
  );
});

// Друге завдання

const secondResButton = document.getElementById("second-task-res-button");
const firstArray = document.getElementById("firstArrayField");
const resSecondField = document.getElementById("second-task-result-field");

secondResButton.addEventListener("click", () => {
  if (firstArray.value) {
    resSecondField.value = calcAverageCalories(
      JSON.parse(
        firstArray.value
          .replace(/(\w+)(?=:)/g, '"$1"')
          .replace(/,(\s*[}\]])/g, "$1")
      )
    );
  } else {
    resSecondField.value = "Введіть масив у текстове поле!";
  }
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
