function minhaFuncao1(){
    alert("Minha Funcao");
};


function minhaFuncao2() {
    $('#area-mensagem').empty();

    var alunos = ['Aluno1', 'aluno2', 'aluno3'];

    $.each(alunos, function(index, value) {
        $('#area-mensagem').append(value);
    });
}

/*
function minhaFuncao1(){
    alert("Minha Funcao");
    $('.btn-danger').empty().append('teste');
};


function minhaFuncao1(){
    $('.btn-danger').empty().append('teste');
    $('.btn-danger').css({
        color: '#00ff00',
        textTransform: 'uppercase',
        width: '70%'
    })
};*/