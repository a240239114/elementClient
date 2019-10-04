
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
//初始化mapState,mapGetters方便获取数据
import { mapState, mapGetters } from "vuex";
//解码插件
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
      const eleToken = JSON.parse(localStorage.getItem("eleToken"));
      const user = jwt_decode(eleToken);
      //调用actions异步更改仓储数据,什么叫异步更改数据,就是说在定义actions函数的的时候,里面可以进行异步操作
      /*
         认证===>有值===>length!==0
      没认证===>无值===>length===0
      */

      this.$store.dispatch("SET_IS_AUTHORIZATION", this.isEmpty(user));
      this.$store.dispatch("SET_USER", user);
      this.$store.dispatch()
    },
    isEmpty(value) {
      /*
         基本数据类型:undefined null number 布尔 String symbol
         复杂数据类型:obj function array  
         undefined是意料之中的空置,null是意料之外的空值
         Object.keys(value)===>遍历对象得到的是数组
         Object.keys(a)
         (2) ["name", "age"]
      */
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length !== 0) ||
        (typeof value === "string" && value.trim().length !== 0)
      );
    }
  }
};
</script>

<style lang='less' scoped>
//scoped代表只是在本组件起作用
</style>