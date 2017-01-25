<template>
  <div class="ff-lay ff-v">
    <div class="lay-col-1 ff-lock" style="height: 152px;">
      <h1>div 组件的头</h1>
      <H1 align="center">{{options.message}}</H1>
    </div>
    <div class="lay-col-2 ff-lay">
      <div id="vueshowbutton" class="lay-row-1 ff-lock" style="width: 202px;">
        <h1>div 组件的LEFT</h1>
        <slot name="left"></slot>
      </div>
      <div id="vueshowdiv" class="lay-row-2 actived">
        <h1>div 组件的RIGHT</h1>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      options: {
        type: Object,
        default: {message: 'this is a message by default'}
      }
    }
  }
</script>

<style>
</style>
