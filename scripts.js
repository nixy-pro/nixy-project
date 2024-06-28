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
