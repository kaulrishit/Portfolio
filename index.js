document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
document.getElementById("modalSubmit").addEventListener("click", () => {
  getDetails();
});
const getName = function () {
  return this.name;
};
const getPhoneNumber = function () {
  return this.phoneNumber;
};
const getEmail = function () {
  return this.email;
};
function getDetails() {
  const valuesFromModal = {
    name: document.forms["details"]["name"].value,
    email: document.forms["details"]["email"].value,
    phoneNumber: document.forms["details"]["mobile"].value,
  };

  const nameFromModal = getName.bind(valuesFromModal);

  const phoneFromModal = getPhoneNumber.call(valuesFromModal);

  const emailFromModal = getEmail.apply(valuesFromModal);

  const modalAlert = new modalAlertDetails(
    nameFromModal(),
    phoneFromModal,
    emailFromModal
  );

  modalAlert.causeAlert(modalAlert.name)(modalAlert.phoneNumber)(
    modalAlert.email
  );
}

//class
class modalAlertDetails {
  constructor(name, phoneNumber, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
//prototype //currying
modalAlertDetails.prototype.causeAlert = (name) => {
  return (phoneNumber) => {
    return (email) => {
      alert(
        "Your name is " +
          name +
          ", Your phone number is " +
          phoneNumber +
          ", Your email id is " +
          email
      );
    };
  };
};
