$(document).ready(function () {
    //Side nav bar
    $(".button-collapse").sideNav();
    console.log("funciona");

    $('.container').masonry({
        // options
        itemSelector: '.element',
        columnWidth: 200
    });

});

