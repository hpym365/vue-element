define(['component'], function (grid) {
  console.log('pagea被requires 加载了')

  function show(div) {

    // var tmp = '<a href="javascript:void(0)" > {{ str1 [str2]}}</a>'
    //
    // grid.cc(tmp,function (val1,val2) {
    //   alert(val1)
    //   alert(val2)
    // });

    var options = {}

    options.rowevent = function (rowdata,el) {
      alert(JSON.stringify(rowdata))
      console.log(el)
    }
    options.datalist = [{name: 'PageA1', age: '22', sex: 'male', desc: 'nonono'}, {
      name: 'PageA2',
      age: '22',
      sex: 'male',
      desc: 'nonono'
    }]
    options.collist = [{
      showname: '姓名',
      colname: 'name',
      show: true,
      type: [ 'a-component','button-component'],
      sort: true,
      sortType: 'desc',
      width: '50%',
      cbfun: {
        cb1: function (row, col) {
          window.alert('这个是自定义的回调' + col)
        }
      }
    }, {showname: '年龄', colname: 'age', show: true, type: ['a-component'], sort: true, sortType: 'desc'}, {
      showname: '性别',
      colname: 'sex',
      show: true
    }, {showname: '备注', colname: 'desc', show: true}, {
      showname: '删除',
      colname: 'delete',
      show: true,
      type: ['button-component']
    }]

    var pageagrid = grid.grid(div, options)

  }

  return {show: show}

})


