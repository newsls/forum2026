document.getElementById("enrollmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbz70zuWZSOqZnfberVEgVy_m_UZkBhOWMzgurbIvE-thcrY9uXh92nx6GVO_jCKDQHb/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("تم إرسال النموذج بنجاح!");
        document.getElementById("enrollmentForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("حدث خطأ أثناء إرسال النموذج.");
    });
});
