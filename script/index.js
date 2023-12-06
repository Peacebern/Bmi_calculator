const measurement1Radio = document.getElementById("measurement1");
const measurement2Radio = document.getElementById("measurement2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

measurement1Radio.addEventListener("click", function() {
    content1.style.display = "block";
    content2.style.display = "none";
});

measurement2Radio.addEventListener("click", function() {
    content1.style.display = "none";
    content2.style.display = "block";
});

