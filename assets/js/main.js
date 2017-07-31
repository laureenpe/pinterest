$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $(".button-collapse").sideNav();
    $('select').material_select();
    jsonArray();
});

/*Creating the html with the forEach Method at the Json Object*/
function jsonArray() {
    var html = "";
    arregloObjetos.search_results.forEach(function (el) {
        html += ` 
                    <div class="pin">
                            <a href="#modal" onclick="onClickModal(this)" data-id="` + el.id + `" class="modal-trigger" id="pinterest_` + el.id + `"> 
                            <img  id="photo`+ el.id + `"` + `" src="dist/img/` + el.image_url + `"></a>
                            <p class="title">`+ el.title + `<i class="fa fa-thumb-tack" aria-hidden="true"></i><i>36,6k</i><i class="fa fa-check" aria-hidden="true"></i>
                            <i>6</i>    </p>
                            <p class="description">`+ el.description + `</p>
                            <p class="hasthag"><a class=logoM>M</a>` + el.username + ` #  ` + el.hashtag + `</p>                              
                    </div>`


        $('#columns').html(html);
    })
}

/*Creating the modal*/
function onClickModal(element) {
    console.log(element);
    var id = $("#" + element.id).attr('data-id');
    console.log(id);
        arregloObjetos.search_results.forEach(function (el) {
        if (el.id == id) {
            var html = "";
            html += `
                        <div class="row upper-content">
                        <div class="col s6 left">
                            <i class="fa fa-upload" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i>...</i>
                        </div>
                        <div class="col s6 right">
                             <a class="right"><h6><i class="fa fa-thumb-tack" aria-hidden="true"></i>Guardar</h6></a>
                        </div>
                        </div>
                <div class="modal-content">
                        <h4>`+ el.title + `</h4>
                        <img src="dist/img/` + el.image_url + `">
                </div>
                <div class="modal-footer">
                    <div class="row upper-content">
                        <div class="col s6 left">
                            <i class="fa fa-upload" aria-hidden="true"></i>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <i>...</i>
                        </div>
                        <div class="col s6 right">
                         <a class="right modal-action modal-close"><h6><i class="fa fa-thumb-tack" aria-hidden="true"></i>Guardar</h6></a>
                        </div>
                    </div>
                    <div class="row final-footer">
                        <div class="col s6">
                            <h1 class="hasthag"><a class=logoM>M</a>` + el.username + ` #  ` + el.hashtag + `</h1> 
                        </div>
                        <div class="col s6">
                            <h2>Leerlo</h2>
                    </div>
                </div>
                 <div class="row">
                    <div class="col s12">
                    <p class="description">`+ el.description + `</p>
                    </div>
                 </div>
                
            </div>`;

            $(".modal").html(html);
        }
    });
}

