const modalBtn = document.querySelector('.modal-btn');
const overlayModal = document.querySelector('.overlay-modal');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
    overlayModal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function(){
    overlayModal.classList.remove('show-modal');
})