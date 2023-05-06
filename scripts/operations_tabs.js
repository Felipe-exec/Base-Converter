function openTab(evt, tabName) {
    // Pegar todos os elementos com a classe "tabcontent" e ocultá-los
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Pegar todos os elementos com a classe "tablinks" e remover a classe "ativo"
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostrar o conteúdo da tab atual e adicionar a classe "ativo" ao botão clicado
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}