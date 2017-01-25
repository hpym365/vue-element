<template>
  <div>

    <Divcom :options="options">
      <Buttoncom slot="left" :options="options"></Buttoncom>
      <Loading slot="right" :options="options"></Loading>
    </Divcom>
  </div>
</template>


<script>
  import Buttoncom from './Button.vue'
  import Loading from './Loading.vue'
  import Divcom from './Div.vue'

  export default{
    data () {
      var options = {
        message: 'in vue it works...',
        loading: false,
        btn: 'Change加载',
        funclick: this.changeLoading
      }
      return {options}
    },
    components: {Buttoncom, Loading, Divcom},
    methods: {
      changeLoading: function () {
        this.options.loading = !this.options.loading
      }
    }
  }

</script>
