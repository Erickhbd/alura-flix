function adicionarSerie() {
    var campoSerieFavorita = document.getElementById("serie").value;
    if (campoSerieFavorita.endsWith(".jpg")) {
      listarSeriesNaTela(campoSerieFavorita);
    } else {
      console.error("Endereço da série inválido.");
    }
    document.getElementById("serie").value = "";
  }
  
  function listarSeriesNaTela(serie) {
    var elementoSerieFavorita = "<img src=" + serie + ">";
    var elementoListaSeries = document.getElementById("listaSeries");
    elementoListaSeries.innerHTML =
      elementoListaSeries.innerHTML + elementoSerieFavorita;
  }
  