(function () {
  emailjs.init("5dAI_i0v565QdXQCz"); // Replace with your EmailJS user ID
})();

function sendEmail(event) {
  event.preventDefault();

  var templateParams = {
    gname: document.getElementById("gname").value,
    gmail: document.getElementById("gmail").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_cb1yi89", "template_91p513u", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent successfully!");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send email. Please try again.");
    }
  );
}
