define(['component'], function (component) {
  console.log('pageb被requires 加载了')

  function show(div) {


    var options = {}
    options.message = 'page c show message'
    var pagecdiv = component.div(div, options)


    var close2 = component.button($('#vueshowbutton'), {btn: '关闭2'})
    close2.addevent('click', function (value) {
      alert('345' + value)
    })

    // close2.options.dom.addEventListener('click',function () {
    //   alert('接收到了绑定了')
    // })
  }

  return {show: show}
})


