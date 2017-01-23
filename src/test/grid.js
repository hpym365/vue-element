function grid(div,options) {

  div.empty();

  div.append('<grid :options="options"></grid>')

  var grid = window.$grid

  console.log(div)

  var gridvue = new Vue({
    el: '#'+div[0].id,
    data: {
      options: options
    },
    components: {grid},
    methods: {
      setSortFun: function (fun) {
        this.options.sortfun = fun
      }
    }
  })

  return gridvue
}

