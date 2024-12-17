document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(function (carousel) {
        const ul = carousel.querySelector('ul');
        const nextBtn = carousel.querySelector('.next');
        const prevBtn = carousel.querySelector('.prev');
        const bullets = carousel.querySelectorAll('ol li');
        const slides = carousel.querySelectorAll('ul li');

        const setSelected = function () {
            const scrollLength = ul.querySelector('li:nth-child(2)').offsetLeft - ul.querySelector('li:nth-child(1)').offsetLeft;
            const nthChild = Math.round((ul.scrollLeft / scrollLength) + 1);

            bullets.forEach(bullet => bullet.classList.remove('selected'));
            slides.forEach(slide => slide.classList.remove('selected'));

            bullets[nthChild - 1].classList.add('selected');
            slides[nthChild - 1].classList.add('selected');
        };

        // Hidastettu vieritys
        nextBtn.addEventListener('click', () => {
            ul.scrollBy({ left: ul.offsetWidth * 0.7, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            ul.scrollBy({ left: -ul.offsetWidth * 0.7, behavior: 'smooth' });
        });

        ul.addEventListener('scroll', debounce(setSelected));

        setSelected();

        function debounce(fn) {
            let timeout;
            return function () {
                const context = this;
                const args = arguments;
                if (timeout) cancelAnimationFrame(timeout);
                timeout = requestAnimationFrame(() => fn.apply(context, args));
            };
        }

        bullets.forEach(function (bullet, index) {
            bullet.addEventListener('click', function (event) {
                event.preventDefault();
                ul.scrollLeft = slides[index].offsetLeft;
            });
        });
    });
});

