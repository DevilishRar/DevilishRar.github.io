document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.getElementById(this.getAttribute('href').substring(1));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.getElementById('yourElementId').classList.add('fade-out');
