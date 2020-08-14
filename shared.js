    let backdrop = document.querySelector('.backdrop');
    let modal = document.querySelector('.modal');
    let modalNoButton = document.querySelector('.modal__action--negative');
    let navMobile = document.querySelector('.mobile-nav');
    let toggleBtn = document.querySelector('.toggle-button');
    let choosePlanButtons = document.querySelectorAll('.plan button');


   

    function openModal() {
        for (var i = 0; i < choosePlanButtons.length; i++) {
            choosePlanButtons[i].addEventListener('click', function() {
               
                modal.classList.add('open');
                backdrop.classList.add('open');
            });
         }
    }
    

         backdrop.addEventListener('click', function() {
             navMobile.classList.remove('open');
             backdrop.classList.remove('open');
             closeModal();
            
         });

         if (modalNoButton) {
            modalNoButton.addEventListener("click", closeModal);
         }

         function closeModal() {
             if (modal) {
                modal.classList.remove('open');
                backdrop.classList.remove('open');
            }
         }

         toggleBtn.addEventListener('click', function() {
             navMobile.classList.add('open');
             backdrop.classList.add('open');
           
         });
        
        openModal();

 

   