function grid(divname,datalist,collist) {


  var element = document.createElement('div');
  element.id = divname
  element.innerHTML = '<grid :collist="collist" :datalist="datalist" :sortfun="sortfun"></grid>'
  document.body.appendChild(element)

  var grid = window.$grid

  console.log('grid')

  var gridvue = new Vue({
    el: '#'+divname,
    data: {
      datalist: datalist,
      collist: collist,
      sortfun:sortfun
    },
    components: {grid},
    methods: {
      setSortFun: function (fun) {
        this.sortfun = fun
      }
    }
  })

  return gridvue
}

function test() {
  console.log('this is test function')
}
