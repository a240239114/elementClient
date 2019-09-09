<template>
  <div class="leftNav">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#324057"
          text-color="white"
          active-text-color="#409eff"
          router
        >
          <router-link to="/home">
            <el-menu-item index="home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>

          <el-submenu index="1" v-for="(item,index) in items" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.tittle}}</span>
            </template>

            <el-menu-item v-for="(item1,index) in item.child" :key="index">
              <el-menu-item :index="item1.path">{{item1.tittle}}</el-menu-item>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-view",
          tittle: "资金管理",
          path: "",
          child: [{ tittle: "资金流水", path: "/moneyWater" }]
        },
        {
          icon: "el-icon-setting",
          tittle: "信息管理",
          path: "",
          child: [{ tittle: "个人信息", path: "/userInfo" }]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log("key======>" + key, "keyPath=========>" + keyPath);
    },
    handleClose(key, keyPath) {
      // console.log("key======>" + key, "keyPath=========>" + keyPath);
    }
  }
};
</script>
<style lang='less' scoped>
.leftNav {
  // position: fixed;
  // top: 71px;
  // left: 0;
  // min-height: 100%;
  width: 180px;
  height: 100%;
  background-color: #324057;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 140px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>