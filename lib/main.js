$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        telefone: {
            required: true
        },
        email: {
            required: true,
            email: true
        }
    }
})