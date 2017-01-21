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
      <th :width="col.width" :class="sort && col.sort ? headerSortClass : headerclass">
        <template v-if="sort && col.sort">
          <a href="javascript:void(0)" @click="sortfun(col)">{{ col.showname }}
            <template v-if="sortfield === col.colname">
              {{ sortarr[sorttype] }}
            </template>
          </a>
        </template>
        <template v-else>
          {{ col.showname }}
        </template>
      </th>
    </template>
  </tr>
</template>

<script>
  import axios from 'axios'

  console.log(axios)
  export default {
    data () {
      return {
        sortarr: {asc: '↑', desc: '↓', no: '→'},
        sort: true,
        sortfield: ''
      }
    },
    components: {},
    props: {
      datalist: {
        type: Array
      },
      collist: {
        type: Array
      },
      sortfun: {
        type: Function,
        default: function (col) {
          window.alert('this is a sort function')
          console.log(col)
        }
      },
      headerclass: {
        type: String,
        default: 'headerclass'
      },
      headerSortClass: {
        type: String,
        default: 'myHeaderSortClass'
      }
    },
    methods: {},
    computed: {},
    created () {
    }
  }
</script>
