function showhtml (div,html,griddiv) {

  $.ajax({url:html}).then(function(htmlobj){
    div.empty();
    div.append(htmlobj)

    if(html === 'a.html'){
      require(['pagea'],function (pagea) {
        console.log(pagea)
        pagea.show($('#adiv'))
      })
    }

    if(html === 'b.html'){
      require(['pageb'],function (pageb) {
        pageb.show($('#bdiv'))
      })
    }

  })
}
