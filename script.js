document.addEventListener("DOMContentLoaded", function () {
    function toggleClass() {
        const container = document.getElementById("main__projects-bullets");
        container.classList.toggle("main__projects-bullets--show");
    }

    document.getElementById("button-bullets").addEventListener("click", toggleClass);
});

document.addEventListener("DOMContentLoaded", function () {
    function toggleClass() {
        const container = document.getElementById("main__projects-bullets-2");
        container.classList.toggle("main__projects-bullets--show");
    }

    document.getElementById("button-bullets-2").addEventListener("click", toggleClass);
});

document.addEventListener("DOMContentLoaded", function () {
    function toggleClassArrow() {
        const container = document.getElementById("arrow1");
        container.classList.toggle("arrow-close");
    }

    document.getElementById("button-bullets").addEventListener("click", toggleClassArrow);
});

document.addEventListener("DOMContentLoaded", function () {
    function toggleClassArrow2() {
        const container = document.getElementById("arrow2");
        container.classList.toggle("arrow-close");
    }

    document.getElementById("button-bullets-2").addEventListener("click", toggleClassArrow2);
});
