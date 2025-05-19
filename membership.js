function nextStep(step) {
    document.querySelectorAll(".form-step").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(`step${step}`).style.display = "block";
}

function prevStep(step) {
    document.querySelectorAll(".form-step").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(`step${step}`).style.display = "block";
}

// Prevent empty submissions
document.getElementById("membershipForm").addEventListener("submit", function(event) {
    const cardInfo = document.getElementById("card").value.trim();
    if (!cardInfo) {
        event.preventDefault();
        alert("Please fill out payment details.");
    }
});

function nextStep(step) {
    if (step === 2) { 
        // Validate General Info before moving to Payment
        let valid = true;

        const fields = ["name", "dob", "email", "phone"];
        fields.forEach(field => {
            const input = document.getElementById(field);
            const errorMessage = document.getElementById(field + "-error");

            if (!input.value.trim()) {
                errorMessage.textContent = "This field is required.";
                input.classList.add("input-error");
                valid = false;
            } else {
                errorMessage.textContent = "";
                input.classList.remove("input-error");
            }
        });

        if (!valid) return; // Stop progression if validation fails
    }

    // Proceed to next step if validation passes
    document.querySelectorAll(".form-step").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(`step${step}`).style.display = "block";
}

function prevStep(step) {
    document.querySelectorAll(".form-step").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(`step${step}`).style.display = "block";
}
