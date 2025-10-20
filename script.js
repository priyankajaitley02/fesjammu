document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // form page reload hone se rokta hai

    // Data fetch from form
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Prepare CSV content
    const csvHeader = "Name,Contact,Email,Message\n";
    const csvRow = `"${name}","${contact}","${email}","${message}"\n`;
    const csvContent = csvHeader + csvRow;

    // Create blob
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Trigger download
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "contact_message.csv";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();

    // Optional: Reset form
    document.getElementById("contactForm").reset();

    // Alert for user
    alert("Your message has been saved as Excel-compatible file.");
});
