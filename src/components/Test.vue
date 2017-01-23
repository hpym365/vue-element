<template>
  <Grid :options="options"></Grid>
</template>


<script>
  import Grid from './grid/Grid.vue'

  export default{
    data () {
      let options = {}
      options.rowevent = function (row) {
        window.alert(JSON.stringify(row))
      }
      options.datalist = [{name: 'PageA1', age: '22', sex: 'male', desc: 'nonono'}, {
        name: 'PageA2',
        age: '22',
        sex: 'male',
        desc: 'nonono'
      }]
      options.collist = [{
        showname: '姓名',
        colname: 'name',
        show: true,
        type: '',
        sort: true,
        sortType: 'desc',
        width: '50%'
      }, {showname: '年龄', colname: 'age', show: true, type: 'acomponent', sort: true, sortType: 'desc'}, {
        showname: '性别',
        colname: 'sex',
        show: true
      }, {showname: '备注', colname: 'desc', show: true}, {
        showname: '删除',
        colname: 'delete',
        show: true,
        type: 'acomponent'
      }]
      return {options}
    },
    components: {Grid}
  }

</script>
