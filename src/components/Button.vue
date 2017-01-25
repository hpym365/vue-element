<template>
  <div>
    <button @click="eventbus" @mouseover="eventbus">{{options.btnname}}</button>
  </div>
</template>

<script>
  export default{
    data () {
      return {btndom: {}}
    },
    props: {
      options: {
        type: Object,
        default: {btn: '按钮'}
      }
    },
    method: {
      test: function () {
        window.alert('test')
      }
    },
    mounted () {
//      debugger
//      this.el.addEventListener('', this.options.btncb)
    }
  }
</script>
