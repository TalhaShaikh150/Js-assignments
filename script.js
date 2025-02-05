function ChangeColor() {
  let include = "abcdef0123456789";
  let length = 6;
  let password = "#";
  let box = document.getElementById("box");
  let colorCode = document.getElementById("color-code");

  for (var i = 0; i < length; i++) {
    password += include.charAt(Math.floor(Math.random() * include.length));
  }
  colorCode.innerHTML = password;
  box.style.backgroundColor = password;
}

function GeneratePassword() {
  let generatedpass = document.getElementById("generatedpass");
  let length = +prompt(`Password Length Should be greater then 5
And less then 30`);
  let characters = "";
  let result = "";

  if (isNaN(length)) {
    alert("Please enter a numeric value for length");
    return;
  } else if (length > 30) {
    alert("Password Length Should Be Less Than or Equal to 30");
    return;
  } else if (length < 5) {
    alert("Password Length Should Be Greater Than or Equal to 5");
    return;
  }

  let includePassword = +prompt(
    `1. Include Lower Case
    2. Include Upper Case
    3. Include Lower Case and Upper Case
    4. Include Numbers (0-9)
    5. Include Symbols`
  );

  if (includePassword === 1) {
    characters = "abcdefghijklmnopqrstuvwxyz";
    console.log("Lower Case Included");
  } else if (includePassword === 2) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("Upper Case Included");
  } else if (includePassword === 3) {
    characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("Lower and Upper Case Included");
  } else if (includePassword === 4) {
    characters +=
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    console.log("Numbers Included");
  } else if (includePassword === 5) {
    characters +=
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_<>?";
    console.log("Symbols Included");
  } else {
    alert("Invalid Option Selected");
    return;
  }

  // Generate the password
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  generatedpass.innerHTML = result;
}

function CheckLeap() {
  let input = prompt("Enter To Check If it is Leap Year");
  let result = document.getElementById("generatedyears");

  if (input % 4 === 0) {
    result.innerHTML = `${input} It is a leap year.`;
  } else {
    result.innerHTML = `${input} It is not a leap year.`;
  }

}

/*For Task*/

function GetFullName() {
  const firstName = prompt("Enter Your First Name");
  const lastName = prompt(" Enter Your Last Name");

  alert(firstName + " " + lastName);
}

function stringLength() {
  let favmobile = prompt("Enter Your Favourate Mobile Model");

  document.write("My favorate Phone is: " + favmobile + "<br>");

  document.write("Length Of String: " + favmobile.length);
}

function findIndex() {
  let word = prompt("Enter Your Word");
  let findWord = prompt("Which Letter You Want To find?");

  alert(`The Letter '${findWord}' is at index: ` + word.indexOf(findWord));
}
function lastIndex() {
  let word = prompt("Enter Word");
  alert(`This Last Index Of ${word} is: ` + word[word.length - 1]);
}

function find3rdIndex() {
  let word = prompt("Enter Your Word");

  alert(word.indexOf(word));
}

function replace() {
  let city = "Hyderabad" + "<br>";
  let word = "City : " + city;
  document.write(word);
  city = "Islamabad";
  word = "After Replacement : " + city;
  document.write(word);
}

function occurrences() {
  let message = prompt("Enter Your Paragraph");
  let find = prompt("Find Word You Want To Replace");
  let replace = prompt("Enter Word To Replace");
  let arr = message.split(" ");
  let result = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
      arr[i] = replace;
    }
  }
  result += arr.join(" ");
  console.log(result);
}

function upperCase() {
  let userInput = prompt("Enter Word To Change UpperCase");
  let upperCase = userInput.toUpperCase();
  alert(`User Input: ${userInput}
Upper case: ${upperCase}`);
}
