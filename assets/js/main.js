$(document).ready(function () {
    //Side nav bar
    $(".button-collapse").sideNav();
    $('.modal').modal();

    jsonArray();
});


function jsonArray() {
    var html = "";
    arregloObjetos.search_results.forEach(function (el) {
        html += ` 
                    <div class="pin">
                            <img id="photo`+ el.id + `"` + `" src="dist/img/` + el.image_url + `">
                            <p class="title">`+ el.title + `<i class="fa fa-pinterest" aria-hidden="true"></i></p>
                            <p class="description">`+ el.description + `</p>
                            <p class="hasthag"><i class="fa fa-meetup" aria-hidden="true"></i>` + el.username + ` #  ` + el.hashtag + `</p>
                             
                    </div>`;
        $('#columns').html(html);



    })
}






