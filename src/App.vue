<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  // 去掉这一行代码  刷新页面就不会回到首页
  // created: function () {
  //   this.$router.push({path: '/inTheaters'})
  // }
}
</script>

<style>
 #app {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
    font-family: 'FontAwesome', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #E5E9F2;
    color: #2c3e50;
  }
</style>
