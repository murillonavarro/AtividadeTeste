
$(document).ready(function () {
    if (obj) {
        $('#formBeneficiarios #NomeModal').val(obj.Nome);
        $('#formBeneficiarios #CPFModal').val(obj.CPF);
    }
    $('#formBeneficiarios').submit(function (e) {
        e.preventDefault();
        
        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#NomeModal").val(),
                "CPF": $(this).find("#NomeModal").val()
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
                window.location.href = urlRetorno;
            }
        });
    })
    
})
