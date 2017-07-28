$(document).ready(function () {
    //Side nav bar
    $(".button-collapse").sideNav();
    console.log("funciona");
    $('.container').masonry({
        // options
        itemSelector: '.element',
    });
    jsonArray();
});

function jsonArray(){
    arregloObjetos.search_results.forEach(function(el){
    console.log(el.id);
	/*document.write("<img src='" + el.listing.thumbnail_url + "'" + "><br>");
	document.write("<b>" + el.listing.localized_city + " - " + el.listing.name + "</b><br>");
	document.write("Baños : " + el.listing.bathrooms + "<br>");
	document.write("Dormitorios : " + el.listing.bedrooms + "<br>");*/
})
}

