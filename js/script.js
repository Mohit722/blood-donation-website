document.addEventListener("DOMContentLoaded", function () {

    // Form submission handler for Blood Request Form
    const bloodRequestForm = document.getElementById("bloodRequestForm");
    bloodRequestForm.addEventListener("submit", handleBloodRequestSubmit);
  
    // Form submission handler for Donor Registration Form
    const donorRegistrationForm = document.getElementById("donorRegistrationForm");
    donorRegistrationForm.addEventListener("submit", handleDonorRegistrationSubmit);
  
    // Form Validation function
    function validateForm(fields) {
      let isValid = true;
      fields.forEach(field => {
        if (!field.value.trim()) {
          showErrorMessage(field, `${field.name} is required`);
          isValid = false;
        } else {
          clearErrorMessage(field);
        }
      });
      return isValid;
    }
  
    // Show error message
    function showErrorMessage(field, message) {
      const errorElement = document.createElement('span');
      errorElement.classList.add('error');
      errorElement.textContent = message;
      field.parentElement.appendChild(errorElement);
    }
  
    // Clear error message
    function clearErrorMessage(field) {
      const errorElement = field.parentElement.querySelector('.error');
      if (errorElement) {
        errorElement.remove();
      }
    }
  
    // Blood Request form submission
    function handleBloodRequestSubmit(event) {
      event.preventDefault();
  
      const fieldsToValidate = [
        bloodRequestForm.querySelector('[name="patientName"]'),
        bloodRequestForm.querySelector('[name="bloodGroup"]'),
        bloodRequestForm.querySelector('[name="city"]'),
        bloodRequestForm.querySelector('[name="contact"]'),
        bloodRequestForm.querySelector('[name="hospital"]')
      ];
  
      if (!validateForm(fieldsToValidate)) {
        return;
      }
  
      const formData = {
        patientName: fieldsToValidate[0].value,
        bloodGroup: fieldsToValidate[1].value,
        city: fieldsToValidate[2].value,
        contact: fieldsToValidate[3].value,
        hospital: fieldsToValidate[4].value,
      };
  
      submitBloodRequest(formData);
    }
  
    // Donor Registration form submission
    function handleDonorRegistrationSubmit(event) {
      event.preventDefault();
  
      const fieldsToValidate = [
        donorRegistrationForm.querySelector('[name="donorName"]'),
        donorRegistrationForm.querySelector('[name="bloodGroup"]'),
        donorRegistrationForm.querySelector('[name="city"]'),
        donorRegistrationForm.querySelector('[name="contact"]')
      ];
  
      if (!validateForm(fieldsToValidate)) {
        return;
      }
  
      const formData = {
        donorName: fieldsToValidate[0].value,
        bloodGroup: fieldsToValidate[1].value,
        city: fieldsToValidate[2].value,
        contact: fieldsToValidate[3].value,
      };
  
      submitDonorRegistration(formData);
    }
  
    // Simulate an API call for submitting blood request
    function submitBloodRequest(data) {
      console.log("Submitting Blood Request:", data);
      // Here, you would typically make an API call using fetch or axios
      fetch('https://example.com/api/blood-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        alert("Blood request submitted successfully!");
        bloodRequestForm.reset();
      })
      .catch(error => {
        console.error("Error submitting blood request:", error);
      });
    }
  
    // Simulate an API call for donor registration
    function submitDonorRegistration(data) {
      console.log("Submitting Donor Registration:", data);
      // Here, you would typically make an API call using fetch or axios
      fetch('https://example.com/api/donor-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        alert("Donor registered successfully!");
        donorRegistrationForm.reset();
      })
      .catch(error => {
        console.error("Error registering donor:", error);
      });
    }
  });
  