document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const intro = document.getElementById('intro');

    function toggleNavVisibility() {
        const introRect = intro.getBoundingClientRect();
        if (introRect.top < window.innerHeight && introRect.bottom > 0) {
            nav.style.display = 'flex'; s
        } else {
            nav.style.display = 'none'; 
        }
    }

 
    window.addEventListener('scroll', toggleNavVisibility);
    window.addEventListener('resize', toggleNavVisibility);

    toggleNavVisibility();
});
