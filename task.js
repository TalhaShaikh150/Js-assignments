function GetFullName(){
  const firstName = prompt("Enter Your First Name");
  const lastName = prompt(" Enter Your Last Name");
  let fullName = document.getElementById("name");
  
  fullName.innerHTML = "'How are You'" + firstName + lastName;
}



function stringLength() {
  let favmobile = prompt("Enter Your Favourate Mobile Model");

  document.write("My favorate Phone is: " + favmobile + "<br>");

  document.write("Length Of String: " + favmobile.length);
}
