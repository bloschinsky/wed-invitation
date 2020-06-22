var $notationModal = $('#modal-some-notations');
var $openBoxBtn = $('.open-box');

$openBoxBtn.on('click', function () {
  $notationModal.modal('show');
  console.log('clicked', $notationModal);
});