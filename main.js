$(document).ready(function() {

  var searchInput = "";
  var placeholder = "";



  //random Wikipedia article
  $("#random").click(function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  });

  //hold search && call function API with search

  //Search click
  $('#buttonClick').click(function() {

    searchInput = document.getElementById("input").value.replace(/ /g, "%20");

    if (searchInput != placeholder) {
      $(".content").remove();
      placeholder = document.getElementById("input").value.replace(/ /g, "%20");
      searchWIKI(searchInput);
    }
  });

  //enter
  $('#input').bind("enterKey", function(e) {

    searchInput = document.getElementById("input").value.replace(/ /g, "%20");
    if (searchInput != placeholder) {
      $(".content").remove();
      placeholder = document.getElementById("input").value.replace(/ /g, "%20");
      searchWIKI(searchInput);
    }

  });
  $('#input').keyup(function(e) {
    if (e.keyCode == 13) {
      $(this).trigger("enterKey");
    }
  });

  //API
  function searchWIKI() {

    var API = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&redirects=return&search=";
    API += searchInput;
    API += '&callback=?';

    // console.log(API);

    $.getJSON(API, function(data) {
      //console.log(data);

      for (i = 1; i < data.length; i++) {
        //console.log(data[i]);
        var header = data[1];
        var text = data[2];
        var link = data[3];

      }

      for (j = 0; j < header.length; j++) {
        //console.log(data[j]);


       $("#result").after('<span class="content"><div class="col-md-12"><a href=' + link[j] + ' target="_blank"><div class="jumbotron"><h2>' + header[j] + '</h2><p>' + text[j] + '</p></div></div></a><span>').slideDown();

      }

    });

  }


});
