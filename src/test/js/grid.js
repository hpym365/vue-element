define([],function () {
  function grid(div,options) {

    div.empty();

    div.append('<grid :options="options"></grid>')

    var grid = window.$grid

    var gridvue = new Vue({
      el: div[0],
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
    gridvue.jqdom = $(gridvue.$el)

    return gridvue
  }

  return {grid:grid}
})
