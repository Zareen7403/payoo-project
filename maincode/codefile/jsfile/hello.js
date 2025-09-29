//console.log("Hello, world!");

// login button click event

document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault();
    const mobileNumber = 12345678910;
    const pin=1234;
    const mobileNumberInput = document.getElementById('mobile-number').value;
    const pinInput = document.getElementById('pin-number').value;
    const convertedMobileNumber = parseInt(mobileNumberInput);
    const convertedPin = parseInt(pinInput);
    ///console.log("Mobile Number:", convertedMobileNumber);
   /// console.log("PIN:", convertedPin);

    if (convertedMobileNumber === mobileNumber && convertedPin === pin) {
       window.location.href = "../home.html";}
        // console.log("Login successful!");}
   else{
        console.log("Invalid mobile number or PIN.");
    }
  })