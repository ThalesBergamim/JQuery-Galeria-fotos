$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();  
        const enderecoDaNovaImagem = $('#endereco-img-nova').val();
        const NovaImagem = $('<li style="display:none"></li>');
        
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(NovaImagem);
        
        $(`<div class="overlay-img-link">
            <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank"> 
                Ver imagem em tamanho real
            </a> 
        </div>`).appendTo(NovaImagem);
        
        $(NovaImagem).appendTo('ul');
        $(NovaImagem).fadeIn();
        $('#endereco-img-nova').val('');
    });
})

    