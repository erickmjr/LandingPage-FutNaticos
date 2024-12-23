$(document).ready(function() {

    $("form").on("submit", function(e) {
        e.preventDefault();
    

    if ($(this).valid()) {
        const message = $("#registerMessage");
        const toast = new bootstrap.Toast(message);
        toast.show();
    }
    

    });

    $("#telephone").mask("(00) 00000-0000");

    $("#form").validate({

        rules: {
            name: {
                required: true
            },

            email: {
                required: true,
                email: true
            }
        },

        messages: {
            name: "Por favor, insira o seu nome.",
            email: "Por favor, insira o seu E-mail.",
            telephone: "Por favor, insira um número válido."
        },
    })

})