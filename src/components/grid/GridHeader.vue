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
    <template v-for=" col in mycollist ">
      <th :width="col.width" :class="ifsort && col.sort ? myHeaderSortClass : myHeaderClass" v-if="ifsort">
        <template v-if="ifsort && col.sort">
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
  export default {
    data () {
      return {
        myHeaderClass: 'myHeaderClass',
        myHeaderSortClass: 'myHeaderSortClass'
      }
    },
    components: {},
    props: [
      'collist',
      'sort',
      'headerclass'
    ],
    methods: {
      ...mapGetters({

      }),
      sortByField: function (col) {
        window.alert('排序方法ajax请求当前字是:' + col.showname + ' !英文名是:' + col.colname)
      }
    },
    computed: {
      ifsort () {
        if (this.sort !== false) {
          return true
        }
      },
      mycollist () {
        if (this.collist === undefined) {
          return [
            {
              showname: '姓名',
              colname: 'name',
              show: true,
              type: 'button-component',
              sort: true,
              sortType: 'desc',
              width: '50%'
            }, {
              showname: '年龄',
              colname: 'age',
              show: true,
              type: 'a-component',
              sort: true,
              sortType: 'desc'
            }, {
              showname: '性别',
              colname: 'sex',
              show: true
            }, {
              showname: '备注',
              colname: 'desc',
              show: true
            }, {
              showname: '删除',
              colname: 'delete',
              show: true,
              type: 'delete-component'
            }]
        }
      }
    }
  }
</script>
