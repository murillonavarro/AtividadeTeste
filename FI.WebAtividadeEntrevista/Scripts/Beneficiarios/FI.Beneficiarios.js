
$(document).ready(function () {
    $('#formBeneficiarios').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: urlPostBenef,
            method: "POST",
            data: {
                "NomeModal": $(this).find("#NomeModal").val(),
                "CPFModal": $(this).find("#CPFModal").val()
            },
            error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
            success:
            function (r) {
                ModalDialog("Sucesso!", r)
                $("#formBeneficiarios")[0].reset();
            }
        });
    })
    
})