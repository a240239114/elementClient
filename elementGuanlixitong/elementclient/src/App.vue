
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import jwt_decode from "jwt-decode";


export default {
  mounted() {
    //防止登录后刷新跳回到Login和register
    localStorage.eleToken
      ? this.$router.push("/home")
      : this.$router.push("/login");
    this.setVuexState();
  },
  computed: {
    ...mapState(["isAuthorization", "user"])
  },
  methods: {
    //设置Vue中的state
    setVuexState() {
      //字符串
      // const eleToken = localStorage.eleToken;
      const eleToken = JSON.parse(localStorage.getItem("eleToken"));
      const user = jwt_decode(eleToken);
      // console.log(user);
      this.$store.dispatch('SET_IS_AUTHORIZATION',!this.isEmpty(user));
      this.$store.dispatch('SET_USER',user);
    },
    isEmpty(value) {
      /*
         基本数据类型:undefined null number 布尔 String symbol
         复杂数据类型:obj function array  
      */
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>
<style lang='less' scoped></style>