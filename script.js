document.addEventListener("DOMContentLoaded", function () {
    // تأكد من أن جميع العناصر موجودة قبل إضافة الأحداث
    let nextButton = document.getElementById("next");
    let prevButton = document.getElementById("prev");
    let nextPage3Button = document.getElementById("nextPage3");
    let nextPage4Button = document.getElementById("nextPage4"); // زر جديد للانتقال إلى الصفحة 4

    if (nextButton) {
        nextButton.addEventListener("click", function() {
            window.location.href = "page2.html";
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }

    if (nextPage3Button) {
        nextPage3Button.addEventListener("click", function() {
            window.location.href = "page3.html";
        });
    }

    if (nextPage4Button) { // تحقق من وجود الزر ثم أضف الحدث
        nextPage4Button.addEventListener("click", function() {
            window.location.href = "page4.html";
        });
    }
});