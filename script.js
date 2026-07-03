function validateForm() {

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name==="" || email===""){
alert("Please fill all required fields.");
return false;
}

alert("Thank you! Your booking request has been submitted successfully.");

return false;

}