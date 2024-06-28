function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("active");
}

function hideSidebar() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");
    sidebar.classList.remove("active");
    mainContent.classList.remove("active");
}

// Close the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");
    var menuToggle = document.querySelector(".menu-toggle");
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("active");
        mainContent.classList.remove("active");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slider = document.querySelector('.slider');

    let slideIndex = 0;

    nextBtn.addEventListener('click', function() {
        slideIndex++;
        if (slideIndex > 4) slideIndex = 0;
        updateSlider();
    });

    prevBtn.addEventListener('click', function() {
        slideIndex--;
        if (slideIndex < 0) slideIndex = 4;
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(${-slideIndex * 100}%)`;
    }
});
