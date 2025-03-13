document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        let formData = new FormData(form);

        try {
            let response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" },
            });

            if (response.ok) {
                popup.style.display = "block"; // Show success popup
                form.reset(); // Reset form fields
            } else {
                alert("Error sending message. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        }
    });
});

// Close popup function
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
