let palabras = [];
(function($) {
    $(document).on('paste', function(evt) {
        palabras.push(evt.originalEvent.clipboardData.getData('text'));
        console.log(palabras);
    });
})(jQuery);