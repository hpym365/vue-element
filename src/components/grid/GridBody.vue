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
  import {mapGetters} from 'vuex'
  import * as types from '../../store/types'

  export default {
    data () {
      return {
        headerSortClass: 'myHeaderSortClass'
      }
    },
    components: {},
    props: [],
    methods: {
      sortByField: function (col) {
        let store = this.$store
        store.dispatch([types.ACTION_SORT_BY_FIELD], col.colname)
        /**
         * ajax 请求 成功之后把结果给datalist
         */
        this.$axios.get(this.url, this.requestparam).then(function (json) {
          store.commit([types.GETTER_GRID_DATA], json.data)
        }).catch((error) => {
          window.alert(error)
        })
        /**
         * window.alert('排序方法ajax请求当前字是:' + col.showname + ' !英文名是:' + col.colname)
         */
      }
    },
    computed: {
      ...mapGetters({
        'datalist': [types.GETTER_GRID_DATA],
        'collist': [types.GETTER_GRID_COLUMN],
        'sort': [types.GETTER_SORT],
        'sortfield': [types.GETTER_CURRENT_SORT_FIELD],
        'sorttype': [types.CHANGE_CURRENT_SORT_TYPE],
        'url': [types.GETTER_GRID_REQUEST_URL],
        'requestparam': [types.GETTER_GRID_REQUEST_PARAM],
        'headerclass': [types.GETTER_GRID_HEADER_CLASS]
      })
    },
    created () {
    }
  }
</script>
