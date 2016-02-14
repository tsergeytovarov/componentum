'use strict';

(function() {
  var openModalBtns = document.querySelectorAll('.js-get-modal');
  if (openModalBtns) {
    var body = document.querySelector('body');
    openModalBtns = Array.prototype.slice.call(openModalBtns, 0);

    openModalBtns.forEach(function(openModalBtn) {
      openModalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var targetModal;
        if (openModalBtn.dataset.target) {
          targetModal = document.querySelector(openModalBtn.dataset.target);
        } else {
          targetModal = document.querySelector('.modal');
        }
        if (targetModal) {
          closeModal();
          targetModal.classList.add('modal-open');
          body.classList.add('body-modal');

          var modalCloseBtn = targetModal.querySelector('.js-modal-close');
          modalCloseBtn.addEventListener('click', modalCloseBtnEvent);
          targetModal.addEventListener('click', modalCloseOverEvent);
          window.addEventListener('keypress', modalCloseEscEvent);
        }
      });
    });
  }

  /**
   * Функция которая закрывает модальные окна, если они открыты
   */
  function closeModal() {
    var closeModalTarget = document.querySelector('.modal-open');
    if (closeModalTarget) {
      closeModalTarget.classList.remove('modal-open');
      document.querySelector('body').classList.remove('body-modal');
      closeModalTarget.querySelector('.js-modal-close').removeEventListener('click', modalCloseBtnEvent);
      closeModalTarget.removeEventListener('click', modalCloseOverEvent);
      window.removeEventListener('keypress', modalCloseEscEvent);
    }
  }

  /**
   * Событие которое вызывается при закрытии модального окна по нажтию на кнопку.
   * @param {Event} event default
   */
  function modalCloseBtnEvent(event) {
    event.preventDefault();
    closeModal();
  }

  /**
   * Событие которое вызывается при закрытии модального окна при клике по оверлею.
   * @param {Event} event default
   * @param {Element} modal
   */
  function modalCloseOverEvent(event) {
    if (event.target === document.querySelector('.modal-open')) {
      closeModal();
    }
  }

  /**
   * Событие которое вызывается при закрытии модального окна при нажатии на ESC.
   * @param {Event} event default
   */
  function modalCloseEscEvent(event) {
    if (event.keyKode === 27) {
      closeModal();
    }
  }
})();
