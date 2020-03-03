const btn = document.querySelectorAll('.open');
const form = document.querySelectorAll('form');
const modal = document.querySelectorAll('.modal');
const closebtn = document.querySelectorAll('form button[type*=button]');


btn.forEach(button => {
    button.addEventListener('click', (e) => {
        modal.forEach(m => {
            if(m.previousElementSibling === e.target) {
                form.forEach(f => {
                    if(f.parentElement.previousElementSibling === e.target) {
                        m.classList.toggle('modal-active');
                        f.style.animation = 'drop 0.5s ease forwards';
                    }
                }); 
            }
        });
        
    });
});
closebtn.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.parentElement.classList.toggle('modal-active');
        close.parentElement = 'drop 0.5s ease forwards';
    });
});
form.forEach(f => {
    f.addEventListener('submit', (e) => {
        e.preventDefault();
        f.parentElement.classList.toggle('modal-active');
    });
});