<template>
  <div class="main">
    <headerNav></headerNav>

    <div class="bottom">
      <leftNav></leftNav>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
  created() {
    this.$store.dispatch("");
  },
  methods: {},
  components: {
    headerNav,
    leftNav
  }
};
</script>


<style lang='less' scoped>
.main {
  height: 100vh;
  overflow: hidden;
  .bottom {
    display: flex;
    height: 870px;
  }
}
</style>