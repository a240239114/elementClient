<template>
  <div class="main">
    <headerNav></headerNav>

    <div class="bottom">
      <leftNav></leftNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerNav from "../sub/headerNav";
import leftNav from "../sub/leftNav";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    headerNav,
    leftNav
  }
};
</script>


<style lang='less' scoped>
.main{
  height: 100vh;
  overflow: hidden;
.bottom {
  display: flex;
  height: 870px;
}
}
</style>