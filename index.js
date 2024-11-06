// To show the button when scroll is done
window.onscroll = function() {
    const toTopBtn = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

// To go back to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}