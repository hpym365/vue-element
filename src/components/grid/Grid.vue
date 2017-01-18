<template>
  <div class="rcl-ude-adviceInfo-tablewrap">
    <table border="5" class="rcl-ude-adviceInfo-table">
      <thead>
      <GridHeader></GridHeader>
      </thead>
      <tbody>
      <tr>
        <td>阿莫西林分散片</td>
        <td>一日3次，一次1片，饭后10分钟口服</td>
        <td style="text-align: center;">0.25gX12</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: center;">盒</td>
        <td style="text-align: center;">
          <button class="xBtn xBtn-danger">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import GridHeader from './GridHeader'
  import {mapGetters} from 'vuex'
  import * as types from '../../store/types'

  export default {
    components: {
      GridHeader
    },
    props: [],
    computed: {
      ...mapGetters({
        'collist': [types.GETTER_GRID_COLUMN],
        'datalist': [types.GETTER_GRID_DATA]
      })
    },
    methods: {
      test: function (value) {

      },
      setColumn: function (column) {
        this.$store.commit([types.CHANGE_GRID_COLUMN], column)
      }
    }
  }
</script>

<style>
  html, body {
    font-family: 'Microsoft YaHei;'
  }

  .rcl-ude-adviceInfo-tablewrap {
    width: 50%;
    height: auto;
    margin: auto;
  }

  .rcl-ude-adviceInfo-table {
    width: 100%;
    height: auto;
    border: 1px solid #cacaca;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .rcl-ude-adviceInfo-table > thead > tr > th {
    text-shadow: 0 1px 0 #fff;
    padding: 5px;
    font-size: 14px;
    color: #666;
    text-align: center;
    background: -webkit-linear-gradient(#ffffff, #eeeeee);
    background: -o-linear-gradient(#ffffff, #eeeeee);
    background: -moz-linear-gradient(#ffffff, #eeeeee);
    background: linear-gradient(#ffffff, #eeeeee);
    border: 1px solid #d5d5d5;
  }

  .rcl-ude-adviceInfo-table tr:nth-child(odd) {
    background: #fff;
  }

  .rcl-ude-adviceInfo-table tr:nth-child(even) {
    background: #f9f9f9;
  }

  .rcl-ude-adviceInfo-table tr:hover {
    background: #d6f0dc;
  }

  .rcl-ude-adviceInfo-table td {
    padding: 8px 5px;
    border: 1px solid #d5d5d5;
  }

  .rcl-ude-adviceInfo-table .xBtn {
    padding: 4px 6px;
    font-size: 12px;
  }
</style>
