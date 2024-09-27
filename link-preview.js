$(document).ready(function(){
    let hoverTimer;
    $('.hover-link').mouseenter(function() {
        const previewBox = $(this).next('.preview-box');
        hoverTimer = setTimeout(function() { previewBox.show(); }, 500);
    }).mouseleave(function() {
        clearTimeout(hoverTimer);
        $(this).next('.preview-box').hide();
    });
});