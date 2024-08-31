document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const section = header.parentElement;
            const content = section.querySelector('.accordion-content');

            section.classList.toggle('open');

            if (section.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }

            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherSection = otherHeader.parentElement;
                    const otherContent = otherSection.querySelector('.accordion-content');
                    otherSection.classList.remove('open');
                    otherContent.style.maxHeight = 0;
                }
            });
        });
    });
});
