function grid(divname,datalist,collist) {

  var element = document.createElement('div');
  element.id = divname
  element.innerHTML = '<grid :tt="tt" :collist="collist" :datalist="datalist"></grid>'
  document.body.appendChild(element)

  var grid = window.$grid
  var gridvue = new Vue({
    el: '#'+divname,
    data: {
      tt:'5566',
      datalist: datalist,
      collist: collist
    },
    components: {grid},
    methods: {
    }
  })

  return gridvue
}

function test() {
  console.log('this is test function')
}
