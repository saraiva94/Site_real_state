function initMap() {
    // Coordenadas de Dublin
    let dublin = {lat: 53.347669, lng: -6.263169};

    // Opções do mapa
    let mapOptions = {
        center: dublin,
        zoom: 15,
    };

    // Criação do mapa
    let map = new google.maps.Map($('#map')[0], mapOptions);

    // Marcador no mapa
    let marker = new google.maps.Marker({
        position: dublin,
        map: map,
        title: 'Dublin, Ireland'
    });
}

$(document).ready(function() {
    // Adiciona um evento de clique no botão de alternância
    $('#dark-mode-toggle').click(function() {
      // Adiciona ou remove a classe de modo escuro do elemento <body>
      $('body').toggleClass('dark-mode');
    });
  });
  
