<template>
  <div>
    <Buttoncom :options="options"></Buttoncom>
    <Loading :options="options"></Loading>
  </div>
</template>


<script>
  import Buttoncom from './Button.vue'
  import Loading from './Loading.vue'

  export default{
    data () {
      var options = {
        loading: false,
        btn: 'Change加载',
        funclick: this.changeLoading
      }
      return {options}
    },
    components: {Buttoncom, Loading},
    methods: {
      changeLoading: function () {
        this.options.loading = !this.options.loading
      }
    }
  }

</script>
