<template>
  <div class="rcl-ude-adviceInfo-tablewrap">
    <table border="5" class="rcl-ude-adviceInfo-table">
      <thead>
      <GridHeader :collist="options.collist" :datalist="options.datalist" :sortfun="options.sortfun"></GridHeader>
      </thead>
      <GridBody :collist="options.collist" :datalist="options.datalist" :rowevent="options.rowevent"
                :tdcbfun="options.tdcbfun"></GridBody>
    </table>
  </div>
</template>

<script>
  import GridHeader from './GridHeader'
  import GridBody from './GridBody.vue'

  console.log('GridBody')
  console.log(GridBody)

  export default {
    data () {
      return {setcollist: []}
    },
    components: {
      GridHeader,
      GridBody
    },
    props: ['options'],
    computed: {},
    methods: {
      test: function () {
        this.setColumn()
      },
      setColumn: function (column) {
        window.alert(this.datalist)
      }
    },
    mounted () {
      return this.$el
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
