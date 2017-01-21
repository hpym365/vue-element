function grid(divname,datalist,collist,sortfun) {


  console.log('sortfun')
  console.log(sortfun)
  var element = document.createElement('div');
  element.id = divname
  element.innerHTML = '<grid :tt="tt" :collist="collist" :datalist="datalist" :sortfun="sortfun"></grid>'
  document.body.appendChild(element)

  var grid = window.$grid
  var gridvue = new Vue({
    el: '#'+divname,
    data: {
      tt:'5566',
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
