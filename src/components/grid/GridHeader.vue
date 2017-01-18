<!--
*@date:2017-01-17 22:02:11
*@author:hanpeng
*@desc 表头实现功能
1字段宽度自定义
2字段排序功能(参数sort==true&&cols里的字段都为true才排序)
3根据sort属性展示不同class
*
-->
<template>
  <tr>
    <template v-for=" col in collist ">
      <th :width="col.width" :class="sort && col.sort ? headerSortClass : headerclass" >
        <template v-if="sort && col.sort">
          <a href="javascript:void(0)" @click="sortByField(col)">{{ col.showname }}</a>
        </template>
        <template v-else>
          {{ col.showname }}
        </template>
      </th>
    </template>
  </tr>
</template>

<script>
  import {mapGetters} from 'vuex'
  import * as types from '../../store/types'

  export default {
    data () {
      return {
        headerSortClass: 'myHeaderSortClass'
      }
    },
    components: {},
    props: [
    ],
    methods: {
      sortByField: function (col) {
        this.$store.dispatch([types.ACTION_SORT_BY_FIELD], col.colname)
        window.alert('排序方法ajax请求当前字是:' + col.showname + ' !英文名是:' + col.colname)
      }
    },
    computed: {
      ...mapGetters({
        'collist': [types.GETTER_GRID_COLUMN],
        'sort': [types.GETTER_SORT],
        'sort1': [types.GETTER_CURRENT_SORT_FIELD],
        'headerclass': [types.GETTER_GRID_HEADER_CLASS]
      })
    },
    created () {
    }
  }
</script>
