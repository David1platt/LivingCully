
$(document).ready(function () {
    $('ul.nav a').click(function(){
        var iframeSrc = $(this).attr('href');
        $('#iframeContainer').fadeOut(2000,function(){
            $('#iframeContainer iframe').attr('src',iframeSrc);
            $('#iframeContainer').fadeIn(2000);
        });
        return false;
    });
});