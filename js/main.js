$(document).ready(function(){
  $('#carrossel-imagens').slick({
    autoplay : true,
  });

$('.menu-hamburguer').click(function(){

  $('nav').slideToggle();
})
// let mascara = if (celular) ? '(00) 00000-0000' : '(00) 0000-0000' - caso para diferenciar os numeros para contato, tento um botão para o usuario selecionar 
$('#telefone').mask('(00) 00000-0000');

$('form').validate({
  rules:{
    nome: {
      required: true
    },
    email : {
      required: true,
      email: true
    },
    telefone : {
      required: true
    },
    mensagem : {
      required: true
    },
    veiculoDeInteresse:{
      required: false
    },
  },
  messages: {
      nome: 'Por favor, ensira seu nome'
    },
    submitHandler: function(form){
      console.log(form)
    },
    invalidHandler: function(evento, validador){
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos){
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    },
})

  $('.lista-veiculos button').click(function(){
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo-interesse').val(nomeVeiculo);

    $('html').animate({
      scrollTop: destino .offset().top
    }, 1000)
  })


})