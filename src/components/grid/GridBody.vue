<!--
*@date:2017-01-18 22:40:20
*@author:hanpeng
*@desc 表体
*
-->
<template>
  <tbody>
  <tr v-for="row in datalist">
    <td v-for="col in collist">{{ row[col.colname] }}</td>
  </tr>
  </tbody>
</template>

<script>
  export default {
    data () {
      return {
        headerSortClass: 'myHeaderSortClass'
      }
    },
    components: {},
    props: ['datalist', 'collist'],
    methods: {},
    computed: {},
    created () {
    }
  }
</script>
