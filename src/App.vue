<template>
  <div id="app">
    <router-link to="/hello">Hello</router-link>
    <br>
    <router-link to="/grid">Grid Component</router-link>
    <br>
    <router-link to="/gridheader">Grid Header Component</router-link>

    <br><br><br><br><br>
    <transition name="bounce">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
