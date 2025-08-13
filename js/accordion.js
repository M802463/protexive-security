const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

        // Re-open if not already open
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
