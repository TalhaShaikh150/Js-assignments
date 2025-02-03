
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
  let generatedpass = document.getElementById('generatedpass');
  let length = +prompt("Enter Password Length");
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
    characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    console.log("Numbers Included");
  } else if (includePassword === 5) {
    characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_<>?";
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

