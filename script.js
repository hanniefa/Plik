$(document).ready(function () {

    $("#toonInfo").click(function () {

        let naam = $("#naam").val();
        let boek = $("#boek").val();
        let film = $("#film").val();

        alert(
            "Ik ben " + naam +
            " en mijn favoriete boek is " + boek +
            " en mijn favoriete film is " + film + "."
        );

    });

});
