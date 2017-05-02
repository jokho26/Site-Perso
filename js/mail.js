$(document).ready(function() {
    // Lorsque je soumets le formulaire
    $('#formcontact').on('submit', function() {
 
        // je récupère les valeurs
        var inputname = $('#inputname').val();
        var inputemail = $('#inputemail').val();
        var inputsubject = $('#inputsubject').val();
        var inputmessage = $('#inputmessage').val();
 
        // je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur
        if(inputname == '' || inputemail == '' || inputsubject == '' || inputmessage == '') {
            alert('Attention, vous avez oubliez de remplir un champ dans le formulaire pour me contacter.');
        } else {
            // appel Ajax
            $.ajax({
                url: './email.php', // le nom du fichier indiqué dans le formulaire
                type: 'POST', // la méthode indiquée dans le formulaire (get ou post)
                data: {
                    inputname : inputname,
                    inputemail : inputemail,
                    inputsubject : inputsubject,
                    inputmessage: inputmessage
                }, // je sérialise les données (voir plus loin), ici les $_POST
                success: function(html) { // je récupère la réponse du fichier PHP
                    alert(html); // j'affiche cette réponse
                }
            });
        }
        return false; // j'empêche le navigateur de soumettre lui-même le formulaire
    });
});