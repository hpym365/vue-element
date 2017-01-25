define(['component'],function (grid) {
  console.log('pageb被requires 加载了')

  function show (div) {
    var options = {}

    options.datalist = [{name: 'PageB', age: '22', sex: 'male', desc: 'nonono'}]
    options.collist = [{
      showname: '姓名',
      colname: 'name',
      show: true,
      type: ['button-component'],
      sort: true,
      sortType: 'desc',
      width: '50%'
    }, {showname: '年龄', colname: 'age', show: true, type: ['button-component','a-component'], sort: true, sortType: 'desc'}, {
      showname: '性别',
      colname: 'sex',
      show: true
    }, {showname: '备注', colname: 'desc', show: true}, {
      showname: '删除',
      colname: 'delete',
      show: true,
      type: ['a-component']
    }]

    var pagebgrid = grid.grid(div,options)
  }

  return {show:show}
})


