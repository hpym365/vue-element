
function aaa () {



debugger




  var element = document.createElement('div');
  element.id = 'bbb'
  element.innerHTML = '<hello></hello>'
  document.body.appendChild(element)

  new Vue({
    el: '#bbb',
    components:{hello}
  })

  console.log(hello);

}

function test () {
    console.log('this is test function')
}
