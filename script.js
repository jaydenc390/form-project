let form = document.querySelector("form");
let button = document.querySelector("button");
const inputElements = form.querySelectorAll('input, textarea');

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

button.addEventListener("click", function() {
  alert("Form Submission Successful!");
  document.querySelector("form").reset();
  
      let allFieldsFilled = true;
  
      inputElements.forEach(input => {
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });
      if (allFieldsFilled) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

form.addEventListener('input', function () {
    let allFieldsFilled = true;
  
      inputElements.forEach(input => {
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});
