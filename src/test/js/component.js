define([], function () {

  function button(div, options) {
    div.append('<btncom :options="options" ></btncom>')
    var btncom = window.returnobject.$button
    var btnvue = new Vue({
      el: div[0],
      data: {
        options: options
      },
      components: {btncom},
      methods: {
        addevent: function (event,fun) {
          var opt = this.options
          this.$el.addEventListener(event, function () {
            fun(opt.btn)
            alert(opt)
          })
        }
      },
      mounted(){
      }
    })
    console.log('button vue')
    console.log(btnvue)
    btnvue.jqdom = $(btnvue.$el)

    return btnvue
  }

  function div(div, options) {
    div.empty()
    div.append('<divcom :options="options"></divcom>')
    var divcom = window.returnobject.$div
    var divvue = new Vue({
      el: div[0],
      data: {
        options: options
      },
      components: {divcom},
      methods: {}
    })


    divvue.jqdom = $(divvue.$el)
    console.log(divvue.jqdom)
    return divvue
  }

  function grid(div, options) {
    div.empty()
    div.append('<grid :options="options"></grid>')

    var grid = window.returnobject.$grid

    var gridvue = new Vue({
      el: div[0],
      data: {
        options: options
      },
      components: {grid},
      methods: {
        setSortFun: function (fun) {
          this.options.sortfun = fun
        },
        addevent: function (event,fun) {
          this.$el.addEventListener(event, fun(this.options.btn))
        }
      }
    })

    gridvue.$on('trclick',function () {
      alert('trclick')
    })

    gridvue.$on('trmouseon',function () {
      alert('trmouseon')
    })

    gridvue.$on('tdclick',function (row,eventname,eventpos) {
      console.log('当前事件为'+eventname+'  点击的位置为'+eventpos+' 传递的参数为'+row)
    })
    gridvue.jqdom = $(gridvue.$el)

    console.log(gridvue.jqdom)

    return gridvue
  }

  function createComponent(intmpstr, tdcbfun) {


    intmpstr = '<a href="javascript:void(0)" onclick="cb1(str1=,str2)"> {{ str1 [str2]}}</a>'

    var jqdom = $(intmpstr)
    var intmpstrarr = jqdom[0].attributes
    var resarr = {}


    for (var attr in intmpstrarr) {

      var name = intmpstrarr[attr].name
      var value = intmpstrarr[attr].nodeValue

      var vv = intmpstrarr[attr] + intmpstrarr[attr].nodeValue

      debugger

      // var value = intmpstrarr[attr]
      // $(intmpstr).removeAttr(attr)
      // var value = $(intmpstr).attr(attr, value)
      if (name.startsWith('on')) {
        if (intmpstrarr[attr].nodeValue !== undefined) {
          resarr[intmpstrarr[attr].name] = intmpstrarr[attr].nodeValue
        }
      }
    }

    debugger

    for (var attr in resarr) {
      debugger
      // var value = intmpstrarr[attr]
      // $(intmpstr).removeAttr(attr)
      // var value = $(intmpstr).attr(attr, value)
      // if (attr.startsWith('on')) {
      //   jqdom.removeAttr(attr)
      //   jqdom.attr('\@' + attr.substr(2), resarr[attr])
      // }
      intmpstr.replace(intmpstrarr[attr] + intmpstrarr[attr].nodeValue)

    }


    var dynamiccomponent = {
      template: ['<a href="javascript:void(0)" onclick="cbcb(str1=,str2)"> {{ str1 [str2]}}</a>'].join(''),
      props: {
        rowdata: {},
        colname: {}
      },
      methods: {
        tdcbfun: tdcbfun
      },
      mounted () {
        console.log(this.$el)
      }
    }

    return acomponent
  }


  return {grid: grid, cc: createComponent, div: div, button}
})
