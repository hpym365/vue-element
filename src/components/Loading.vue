<template>
  <div>
    <h1 v-if="options.loading">加载中...{{options.loading}}</h1>
    <h1 v-else>加载完成{{options.loading}}</h1>
    <!--  增加这行代码之后就会改变-->
    <!--<p>ld:{{ld}}</p>-->
  </div>

  <!--<div>-->
  <!--<h1 v-if="options.loading">加载中...{{options.loading}}</h1>-->
  <!--<h1 v-else>加载完成{{options.loading}}</h1>-->
  <!--<p>{{ld}}</p>-->
  <!--</div>-->
</template>
<script>
  export default{
    props: {
      options: {
        type: Object,
        default: {loading: true}
      },
      ld: {type: Boolean}
    },
    methods: {}
  }
</script>
