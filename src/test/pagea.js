requirejs(['grid'],function () {
  console.log('页面被requires 加载了')
})

function showa (div) {
  var options = {}

  options.datalist = [{name: 'PageA', age: '22', sex: 'male', desc: 'nonono'}]
  options.collist = [{
    showname: '姓名',
    colname: 'name',
    show: true,
    type: 'button-component',
    sort: true,
    sortType: 'desc',
    width: '50%'
  }, {showname: '年龄', colname: 'age', show: true, type: 'a-component', sort: true, sortType: 'desc'}, {
    showname: '性别',
    colname: 'sex',
    show: true
  }, {showname: '备注', colname: 'desc', show: true}, {
    showname: '删除',
    colname: 'delete',
    show: true,
    type: 'delete-component'
  }]

  var pageagrid = grid(div,options)

  console.log(pageagrid)
}

function showhtmla (div) {
  $.ajax({url:"a.html"}).then(function(htmlobj){
    div.empty();
    div.append(htmlobj)
    showa($('#adiv'))
  })
}
