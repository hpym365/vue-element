define(['component'], function (component) {
  console.log('pagec被requires 加载了')

  function show(div) {

    var optionsloading = {loading: false}
    var options = {}
    options.message = 'page c show message'
    var pagecdiv = component.div(div, options)

    var loading = component.loading($('#vueshowbutton'), optionsloading)

    var close2 = component.button($('#vueshowdiv'), {
      btn: '加载中1',
      funclick: loading.changeLoading
    })
    // close2.addevent('click', function (value) {
    //   alert('345' + value)
    // })



    // close2.options.dom.addEventListener('click',function () {
    //   alert('接收到了绑定了')
    // })
  }

  return {show: show}
})


