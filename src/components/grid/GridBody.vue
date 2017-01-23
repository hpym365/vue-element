<!--
*@date:2017-01-18 22:40:20
*@author:hanpeng
*@desc 表体
@1、根据collist的show属性判断字段是否显示
@2、根据传入的options.rowevent 判断是否为该行增加点击属性
@3、根据奇数偶数行 判断样式  可以传入options.bodytrclass 数组 或者使用默认的
@4、根据collist的type属性 可以自定义组件显示具体的td  也可以使用定义好的如acomponent 入参 分别为 rowdata col.colname
和td回调的fun （col.cbfun） cbfun有default值 注：仅限在系统自带组件模板有默认值
-->
<template>
  <tbody>
  <template v-for="(row,index) in datalist">
    <tr @click="rowevent != null?rowevent(row):''" :class="index % 2 === 0?bodytrclass[0]:bodytrclass[1]">
      <td v-if="col.show" v-for="col in collist">
        <component v-if="col.type" v-bind:is="col.type" :rowdata="row" :colname="col.colname"
                   :tdcbfun="col.cbfun"></component>
        <template v-else>{{ row[col.colname] }}</template>
      </td>
    </tr>
  </template>
  </tbody>
</template>

<style>
  tr.rowa {
    background-color: #e6f5ff;
  }

  tr.rowb {
    background-color: #15c12f;
  }
</style>
<script>
  var acomponent = {
    template: ['<a href="javascript:void(0)" @click="tdcbfun(rowdata[colname])">{{rowdata[colname]}}</a>'].join(''),
    props: {
      rowdata: {},
      colname: {},
      tdcbfun: {
        type: Function,
        default: function (value) {
          window.alert('这个方法是默认的td回调函数,请设置options.collist对象的cbfun!')
        }
      }
    },
    methods: {
      click: function (value) {
        window.alert('这个a的名字是' + value)
      }
    }
  }
  export default {
    data () {
      return {
        headerSortClass: 'myHeaderSortClass'
      }
    },
    components: {
      'acomponent': acomponent
    },
    props: {
      datalist: {
        type: Array,
        required: true
      },
      collist: {
        type: Array,
        required: true
      },
      rowevent: {
        type: Function,
        default: null
      },
      bodytrclass: {
        type: Array,
        default: ['rowa', 'rowb']
      }
    },
    methods: {
      test: function (value) {
        window.alert('这个a的名字是' + value)
      }
    },
    computed: {},
    created () {
    },
    mounted () {
//      console.log('this.$el')
//      console.log(this.$el)
//      console.log(this)
//      return this.$el
    }
  }
</script>
