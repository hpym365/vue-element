define(['grid'],function (grid) {
  console.log('pagea被requires 加载了')

  function show (div) {
    var options = {}

    options.rowevent = function (row) {
      alert(JSON.stringify(row))
    }
    options.datalist = [{name: 'PageA1', age: '22', sex: 'male', desc: 'nonono'},{name: 'PageA2', age: '22', sex: 'male', desc: 'nonono'}]
    options.collist = [{
      showname: '姓名',
      colname: 'name',
      show: true,
      type: ['button-component','a-component'],
      sort: true,
      sortType: 'desc',
      width: '50%'
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

    var pageagrid = grid.grid(div,options)

  }

  return {show:show}

})


